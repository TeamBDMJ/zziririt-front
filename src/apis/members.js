import { authInstance, instance } from './axiosInstances';

export const getMember = async () => {
  try {
    const url = `/api/v1/members/myinfo`;
    let response = undefined;
    response = await authInstance.get(url);
    console.log(`getMember 요청 - ${url}`);
    console.log(`getMember 응답 - `, response);
    return response.data;
  } catch (error) {
    console.error('getMember - 내 정보를 불러오는데 실패했습니다.', error);
    return error;
  }
};
