import { instance } from './axios';

export const getPosts = async (boardId) => {
  try {
    return await instance.get(`/api/v1/boards/${boardId}/posts`);
  } catch (error) {
    return error;
  }
};

export const getPost = async (boardId, postId) => {
  try {
    return await instance.get(`/api/v1/boards/${boardId}/posts/${postId}`);
  } catch (error) {
    return error;
  }
};
