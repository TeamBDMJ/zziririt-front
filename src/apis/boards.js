import { instance } from './axios';

export const getStreamerBoards = async () => {
  try {
    return await instance.get(`/api/v1/boards/streamer`);
  } catch (error) {
    return error;
  }
};