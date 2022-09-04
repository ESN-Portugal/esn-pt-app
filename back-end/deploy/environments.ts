export const parameters: Parameters = {
  project: 'esn-pt-app',
  awsAccount: '082427212063',
  awsRegion: 'eu-west-1',
  apiDomain: 'api.esnportugal.cloud',
  mediaDomain: 'media.esnportugal.cloud',
  firstAdminEmail: 'it-manager@esnportugal.org'
};

export const environments: { [stage: string]: Stage } = {
  prod: {
    domain: 'esnportugal.cloud',
    destroyDataOnDelete: false
  },
  dev: {
    domain: 'dev.esnportugal.cloud',
    destroyDataOnDelete: true
  }
};

export interface Parameters {
  /**
   * Project key (unique to the AWS account).
   */
  project: string;
  /**
   * The AWS account where the cloud resources will be deployed.
   */
  awsAccount: string;
  /**
   * The AWS region where the cloud resources will be deployed.
   */
  awsRegion: string;
  /**
   * API for each environment will be available at `${apiDomain}/${env.stage}`.
   */
  apiDomain: string;
  /**
   * The domain name where to reach the front-end's media files.
   */
  mediaDomain: string;
  /**
   * The email address of the first (admin) user.
   */
  firstAdminEmail: string;
}

export interface Stage {
  /**
   * The domain name where to reach the front-end.
   */
  domain: string;
  /**
   * Whether to delete the data when the environment is deleted.
   * It should be True for dev and False for prod environments.
   */
  destroyDataOnDelete: boolean;
}
