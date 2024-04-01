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

export const getBoardDataByBoardUrl = async (boardUrl) => {
  try {
    const url = `/api/v1/boards/search?boardUrl=${boardUrl}`;
    console.log(`getBoardDataByBoardUrl 요청 - ${url}`);
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    console.error(
      'getBoardDataByBoardUrl-게시판 목록을 불러오는데 실패했습니다.',
      error
    );
    return error;
  }
};

export const createStreamerApply = async (formData) => {
  try {
    console.log('createStreamerApply');
    const response = await authInstance.post(`/api/v1/boards/apply`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return response.data;
  } catch (error) {
    console.error(
      'createStreamerApply-스트리머 게시판 신청에 실패했습니다.',
      error
    );
    return error;
  }
};

export const getCategoriesByBoardId = async (boardId) => {
  try {
    const url = `/api/v1/boards/${boardId}/categories`;
    console.log(`getBoardDataByBoardUrl 요청 - ${url}`);
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    console.error(
      'getCategoriesByBoardId-카테고리 조회에 실패했습니다.',
      error
    );
    return error;
  }
};
