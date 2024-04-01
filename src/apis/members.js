import { authInstance } from './axiosInstances';

export const getMember = async () => {
  try {
    const url = `/api/v1/members/myinfo`;
    // console.log(`getMember 요청 - ${url}`);
    let response = undefined;
    response = await authInstance.get(url);
    return response.data;
  } catch (error) {
    console.error('getMember - 내 정보를 불러오는데 실패했습니다.', error);
    return error;
  }
};
