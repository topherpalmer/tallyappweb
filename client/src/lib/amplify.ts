import { Amplify, Auth } from 'aws-amplify';

Amplify.configure({
  aws_project_region: import.meta.env.VITE_AWS_REGION,
  aws_cognito_identity_pool_id: import.meta.env.VITE_IDENTITY_POOL_ID,
  aws_cognito_region: import.meta.env.VITE_AWS_REGION,
  aws_user_pools_id: import.meta.env.VITE_USER_POOL_ID,
  aws_user_pools_web_client_id: import.meta.env.VITE_USER_POOL_CLIENT_ID,
  aws_appsync_graphqlEndpoint: import.meta.env.VITE_APPSYNC_URL,
  aws_appsync_region: import.meta.env.VITE_AWS_REGION,
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS'
});

export const signIn = async (username: string, password: string) => {
  try {
    const user = await Auth.signIn(username, password);
    return user;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    await Auth.signOut();
  } catch (error) {
    throw error;
  }
};
