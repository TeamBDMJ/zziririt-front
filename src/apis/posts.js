import { authInstance, instance } from './axiosInstances';

export const getAllPosts = async (page, size) => {
  try {
    if (page === null || page === undefined || page < 0) {
      page = 0;
    }
    if (size === null || size === undefined || size < 0 || size > 100) {
      size = 30;
    }
    const response = await instance.get(`/api/v1/boards/allposts?page=${page}&size=${size}`);
    return response.data;
  } catch (error) {
    console.error('getAllPosts-게시글을 불러오는데 실패했습니다.', error);
    return error;
  }
};

export const getPosts = async (boardId, searchType, searchTerm, page, size) => {
  try {
    const url = generateUrl(`/api/v1/boards/${boardId}/posts`, searchType, searchTerm, page, size);
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    console.error('getPosts-게시글을 불러오는데 실패했습니다.', error);
    return error;
  }
};

export const getPost = async (boardId, postId) => {
  try {
    const response = await instance.get(`/api/v1/boards/${boardId}/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error('getPost-게시글을 불러오는데 실패했습니다.', error);
    return error;
  }
};

export const createPost = async (boardId, postData) => {
  try {
    return await authInstance.post(`/api/v1/boards/${boardId}/posts`, postData);
  } catch (error) {
    console.error('createPost-게시글을 불러오는데 실패했습니다.', error);
    return error;
  }
};

function generateUrl(baseUrl, searchType, searchTerm, page, size) {
  let url = baseUrl;
  if (!(typeof searchType === 'undefined' || typeof searchType == null) ||
    !(typeof searchTerm === 'undefined' || typeof searchTerm == null) ||
    !(typeof page === 'undefined' || typeof page == null) ||
    !(typeof size === 'undefined' || typeof size == null)
  ) {
    url += '?';
    if (!(typeof searchType === 'undefined' || typeof searchType == null)) {
      url += `searchType=${searchType}&`;
    }
    if (!(typeof searchTerm === 'undefined' || typeof searchTerm == null)) {
      url += `searchTerm=${searchTerm}&`;
    }
    if (!(typeof page === 'undefined' || typeof page == null)) {
      url += `page=${page}&`;
    }
    if (!(typeof size === 'undefined' || typeof size == null)) {
      url += `size=${size}&`;
    }
    return url
  } else {
    return url;
  }
}