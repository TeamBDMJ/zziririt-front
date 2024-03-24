import { instance } from './axiosInstances';

export const OAuthLogin = async (oAuthProvider) => {
  try {
    console.log('OAuthLogin-들어가서 instance 호출 전');
    return await instance.get(`/api/v1/oauth2/login/${oAuthProvider}`);
  } catch (error) {
    alert('OAuthLogin-로그인 실패');
    console.log('에러');
    return error;
  }
};

export const OAuthLoginCallback = async (oAuthProvider, queryParams) => {
  try {
    console.log('콜백');
    console.log(`/api/v1/oauth2/callback/${oAuthProvider}?${queryParams}`);
    return await instance.get(
      `/api/v1/oauth2/callback/${oAuthProvider}?${queryParams}`
    );
  } catch (error) {
    alert('OAuthLoginCallback-콜백 실패');
    console.log('에러');
    return error;
  }
};
