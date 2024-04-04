import { instance } from './axiosInstances';

export const getPopularPosts = async () => {
  try {
    const response = await instance.get(`/api/v1/zzirits/rankings`);
    return response.data;
  } catch (error) {
    console.error(
      'getStreamerBoards-스트리머 게시판 목록을 불러오는데 실패했습니다.',
      error
    );
    return error;
  }
};
