import { authInstance, instance } from './axiosInstances';

export const getAllPosts = async (isLogin ,page, size) => {
  try {
    const url = generatePaginationUrl(`/api/v1/boards/allposts`, page, size);
    let response = undefined
    if (isLogin) {
      response = await authInstance.get(url);
    } else {
      response = await instance.get(url);
    }
    console.log("getAllPosts 요청");
    return response.data;
  } catch (error) {
    console.error('getAllPosts-게시글을 불러오는데 실패했습니다.', error);
    return error;
  }
};

export const getPosts = async (isLogin, boardId, page, size) => {
  try {
    const url = generatePaginationUrl(
      `/api/v1/boards/${boardId}/posts`,
      page,
      size
    );
    let response = undefined
    if (isLogin) {
      response = await authInstance.get(url);
    } else {
      response = await instance.get(url);
    }
    console.log(`getPosts ${boardId}번 보드 요청`)
    return response.data;
  } catch (error) {
    console.error('getPosts-게시글을 불러오는데 실패했습니다.', error);
    return error;
  }
};

export const getPost = async (isLogin, boardId, postId) => {
  try {
    const url = `/api/v1/boards/${boardId}/posts/${postId}`
    let response = undefined
    if (isLogin) {
      response = await authInstance.get(url);
    } else {
      response = await instance.get(url);
    }
    console.log("getPost 요청");
    return response.data;
  } catch (error) {
    console.error('getPost-게시글을 불러오는데 실패했습니다.', error);
    return error;
  }
};

export const searchPost = async (searchType, searchTerm, page, size) => {
  try {
    const url = generateSearchUrl(
      `/api/v3/boards/search/posts`,
      searchType,
      searchTerm,
      page,
      size
    );
    const response = await instance.get(url);
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

export const updatePost = async (boardId, postId, postData) => {
  try {
    return await authInstance.put(`/api/v1/boards/${boardId}/posts/${postId}`, postData);
  } catch (error) {
    console.error('updatePost-게시글 삭제에 실패했습니다.', error);
    return error;
  }
};

export const deletePost = async (boardId, postId) => {
  try {
    console.log("postId ", postId, " 삭제요청")
    return await authInstance.delete(`/api/v1/boards/${boardId}/posts/${postId}`);
  } catch (error) {
    console.error('deletePost-게시글 삭제에 실패했습니다.', error);
    return error;
  }
};

function generateSearchUrl(baseUrl, searchType, searchTerm, page, size) {
  let url = baseUrl;
  if (
    !(typeof searchType === 'undefined' || typeof searchType == null) ||
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
    return url;
  } else {
    return url;
  }
}

function generatePaginationUrl(baseUrl, page, size) {
  let url = baseUrl;
  if (
    !(typeof page === 'undefined' || typeof page == null) ||
    !(typeof size === 'undefined' || typeof size == null)
  ) {
    url += '?';
    if (!(typeof page === 'undefined' || typeof page == null)) {
      url += `page=${page}&`;
    }
    if (!(typeof size === 'undefined' || typeof size == null)) {
      url += `size=${size}&`;
    }
    return url;
  } else {
    return url;
  }
}