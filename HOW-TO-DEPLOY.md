# How to (re)create the app environment

Hello, there! This is a guide to deploy the app on a new environment; it only takes ~30 minutes and it's almost fully-automated.

**The back-end is implemented on AWS** ([Amazon Web Services](https://aws.amazon.com/)) resources. _Note: you don't need to have particular knowledge on AWS to complete this walkthrough._

## Pre-requirements

1. Choose an AWS account you own, or [create a new one](https://aws.amazon.com/getting-started/).
1. To completely automate the deployment process, make sure to [purchase a new domain name](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-register.html) or import an existing one inside the [Route53](https://aws.amazon.com/route53) AWS service. _Note: for the domain `egm-app.click` purchased through Route53 we pay only 3$/year._
1. Identify an [AWS region](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/) to use, i.e. where all your cloud resources will be deployed. Suggested regions — since they are close and they support all the cloud resources we use in the project:
   - Frankfurt (`eu-central-1`),
   - Ireland (`eu-west-1`).
1. Install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html) and [configure the credentials linked to your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html).
1. Install [NodeJS](https://nodejs.org/en/); the app is built on Typescript and NodeJS, so it's a mandatory development tool.
1. Install the [AWS Cloud Development Kit (CDK)](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html); this toolkit will deploy the app environment for us.
1. [Boostrap CDK](https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html) in the account/region identified by running the terminal/prompt command:
   ```
   cdk bootstrap aws://ACCOUNT_ID/REGION
   ```

## Deployment

The suggested IDE is [Visual Studio Code](https://code.visualstudio.com/); we included some handy shortcuts built for it.

1. Open the project folder in the IDE.
1. Identify the file `/back-end/deploy/environments.ts` and fix the configuration with your values; explanation:
   - General parameters:
     - `project`: choose a key to identify the project and its resources; _tip: try not to use a key too simple, to avoid naming-overlapping on global resources._
     - `awsAccount`: the ID of the chosen AWS account (e.g. _123456789012_).
     - `awsRegion`: the ID of the chosen AWS region (e.g. _eu-central-1_); all the resources will be deployed there.
     - `apiDomain`: the domain name for the app's API, based on the domain you purchased/imported earlier. Examples: _api.yourdomain.com_, _api-project.yourdomain.com_, etc.
     - `mediaDomain`: the domain name where to locate app's media contents, based on the domain you purchased/imported earlier. Examples: _media.yourdomain.com_, _media-project.yourdomain.com_, etc.
     - `firstAdminEmail`: insert your email address to create the first (admin) user of the app.
   - Stage parameters; you can create as many enviroments (stages) as you like; a common configuration is with _prod_ and _dev_ stages, but you can also create only a production stage or whatever you like:
     - `domain`: the domain name where to reach the front-end for this stage, based on the domain you purchased/imported earlier. Examples: _yourdomain.com_, _dev.yourdomain.com_, etc.
     - `destroyDataOnDelete`: whether to delete the data when the stage is deleted; it should be **true** for _dev_ and **false** for _prod_ stages.
1. From the terminal/prompt, make sure to be in the `/back-end` folder of the project, substitute the STAGE variable (based on the stage/environment you want to deploy) and run:
   ```
   cdk deploy --context stage=STAGE --all --require-approval never --outputs-file output-config.json
   ```
1. _...it will take some time!_ If prompeted, confirm all the requests to create new resources.
1. At the end of the deployment, identify the generated file `/back-end/output-config.json` to get some important configurations to set in a few support files; _note: the same values also appear in the terminal while the resources are being created_:

   - `/back-end/deploy.sh`:
     - `PROJECT`
     - `AWS_REGION`
     - `AWS_PROFILE`: only if you need to use named profiles to identify the AWS account, _i.e. this account is not your default's one_.
   - `/front-end/release.sh`; note: this script supports out-of-the-box two environments: _dev_ and _prod_. To complete the file, fill-in the stage-specific parameters after each stage's deployment:
     - `S3_BUCKET_PROD` (prod)
     - `S3_BUCKET_DEV` (dev)
     - `CLOUDFRONT_DISTRIBUTION_PROD` (prod)
     - `CLOUDFRONT_DISTRIBUTION_DEV` (dev)
     - `AWS_REGION`
     - `AWS_PROFILE`: only if you need to use named profiles to identify the AWS account, _i.e. this account is not your default's one_.
   - `/front-end/src/environment.tsx`:
     - Set the current stage (`CURRENT_STAGE`), i.e. the stage to run when the app is started; read the [development guide](CONTRIBUTING.md) for more info.
     - Change the `url` _for each of the desired stages_.
     - Leave the `stage` attribute as it is; it will be replaced on runtime, based on the value of `CURRENT_STAGE`.
     - Change the `supportEmail` to your liking; some features in app will send feedback and help requests to this email address.
     - Change the `apiUrl` with the API domain chosen.
     - Change the `mediaUrl` with the media domain chosen.
     - Set the `cognito` object with the attributes returned in the `output-config.json` file.
     - Change the `geo.region` attribute with the `AWS_REGION` you chose.

1. **Repeat the deployment steps for each of the desired stages (e.g. _prod_, _dev_)**. Note: after you deployed the 2nd, 3rd, etc. stage, you only need to change/set project-specific parameters: the rest of those you've already set during the deployment of the first stage.
1. Some of the internal features require the sending of email messages. To enable our AWS account to send emails (through the [SES service](https://aws.amazon.com/ses/)), we need to request to AWS to be taken out of the default sandbox of SES. [Read here for more information](https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html). To do this, you can start by running the following command in the terminal, then follow AWS instructions (you will receive a follow-up email) accordingly. Basically, you have to prove that you can handle the project's email without generating too much SPAM or receiving too many email bounces.

   ```
   aws sesv2 put-account-details \
   --production-access-enabled \
   --mail-type TRANSACTIONAL \
   --website-url https://LINK_TO_FRONTEND \
   --use-case-description "We send transactional emails following user-requested actions. All the target email addreses are verified. We implemented a mechanism to detect and manage bounces." \
   --additional-contact-email-addresses YOUR_EMAIL_ADDRESS \
   --contact-language EN
   ```

### Deployment notes

Some of the deployed resources are _stage-independant_ (i.e. they are in common between stages):

- User DB (Cognito).
- Media Bucket (S3); _note: stages' media resources are organized inside the same bucket in different folders._
- Map resource (Location Map).
