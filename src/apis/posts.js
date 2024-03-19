import { instance } from './axios';

export const getAllPosts = async () => {
  try {
    return await instance.get(`/api/v1/boards/1/posts`);
  } catch (error) {
    return error;
  }
};

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

export const createPost = async (boardId, postData) => {
  try {
    return await instance.post(`/api/v1/boards/${boardId}/posts`, postData);
  } catch (error) {
    return error;
  }
};
