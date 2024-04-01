import { instance } from './axiosInstances';

export const OAuthLogin = async (oAuthProvider) => {
  try {
    return await instance.get(`/api/v1/oauth2/login/${oAuthProvider}`);
  } catch (error) {
    alert('OAuthLogin-로그인 실패');
    console.log('에러');
    return error;
  }
};

export const OAuthLoginCallback = async (oAuthProvider, queryParams) => {
  try {
    return await instance.get(
      `/api/v1/oauth2/callback/${oAuthProvider}?${queryParams}`
    );
  } catch (error) {
    alert('OAuthLoginCallback-콜백 실패');
    console.log('에러');
    return error;
  }
};
