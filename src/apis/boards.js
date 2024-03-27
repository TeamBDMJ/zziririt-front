import { authInstance, instance } from './axiosInstances';

export const getStreamerBoards = async () => {
  try {
    const response = await instance.get(`/api/v1/boards/streamer`);
    return response.data;
  } catch (error) {
    console.error(
      'getStreamerBoards-스트리머 게시판 목록을 불러오는데 실패했습니다.',
      error
    );
    return error;
  }
};

export const createStreamerApply = async (formData) => {
  try {
    const response = await authInstance.post(`/api/v1/boards/apply`, formData, {headers: {"Content-Type": "multipart/form-data"}});
    console.log("createStreamerApply")
    console.log(response)
    return response.data;
  } catch (error) {
    console.error(
      'createStreamerApply-스트리머 게시판 신청에 실패했습니다.',
      error
    );
    return error;
  }
};
