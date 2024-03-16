import { instance } from './axios';

export const OAuthLogin = async (oAuthProvider) => {
  try {
    console.log('OAuthLogin-들어가서 intance 호출 전');
    return await instance.get(`/api/v1/oauth2/login/${oAuthProvider}`);
  } catch (error) {
    if (error.response.data.status === 400) {
      alert('옳바른 아이디나 비밀번호를 찾을 수 없습니다.');
    }
    alert('OAuthLogin-로그인 실패');
    console.log('에러');
    return error;
  }
};
