const CURRENT_STAGE = 'prod';

const environments = {
  prod: {
    url: 'https://esnportugal.cloud'
  },
  dev: {
    url: 'https://dev.esnportugal.cloud'
  }
};

const parameters = {
  currentStage: CURRENT_STAGE,
  stage: { url: 'placeholder' },
  version: '1.2.1',
  supportEmail: 'it-manager@esnportugal.org',
  privacyPolicyURL: 'https://www.iubenda.com/privacy-policy/47311861',
  apiUrl: 'https://api.esnportugal.cloud',
  mediaUrl: 'https://media.esnportugal.cloud',
  cognito: {
    region: 'eu-west-1',
    userPoolId: 'eu-west-1_BmHyDD91Y',
    clientId: '27gaollrc096uhosapmb761lda',
    identityPoolId: 'eu-west-1:22d13d9c-b0c8-4e19-9c8f-b6a7ff0e144e'
  },
  geo: {
    region: 'eu-west-1',
    mapName: 'egm-map',
    mapStyle: 'VectorEsriLightGrayCanvas'
  }
};

export const getEnv = () => {
  parameters.stage = environments[CURRENT_STAGE];
  return parameters;
};
