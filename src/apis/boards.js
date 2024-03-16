import { instance } from './axios';

export const getStreamerBoars = async () => {
  try {
    return await instance.get(`/api/v1/boards/streamer`);
  } catch (error) {
    return error;
  }
};
