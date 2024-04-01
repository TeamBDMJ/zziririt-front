import { authInstance, instance } from './axiosInstances';

export const getAllPosts = async (isLogin, page, size) => {
  try {
    const url = generatePaginationUrl(`/api/v1/boards/allposts`, page, size);
    console.log(`getAllPosts 요청 - ${url}`);
    let response = undefined;
    if (isLogin) {
      response = await authInstance.get(url);
    } else {
      response = await instance.get(url);
    }
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
    console.log(`getPosts ${boardId}번 보드 요청 - ${url}`);
    let response = undefined;
    if (isLogin) {
      response = await authInstance.get(url);
    } else {
      response = await instance.get(url);
    }
    return response.data;
  } catch (error) {
    console.error('getPosts-게시글을 불러오는데 실패했습니다.', error);
    return error;
  }
};

export const getPost = async (isLogin, postId) => {
  try {
    const url = `/api/v1/boards/0/posts/${postId}`;
    console.log(`getPost 요청 - ${url}`);
    let response = undefined;
    if (isLogin) {
      response = await authInstance.get(url);
    } else {
      response = await instance.get(url);
    }
    return response.data;
  } catch (error) {
    console.error('getPost-게시글을 불러오는데 실패했습니다.', error);
    return error;
  }
};

export const searchPost = async (
  boardId,
  searchType,
  searchTerm,
  page,
  size,
  categoryId
) => {
  try {
    const url = generateSearchUrl(
      `/api/v1/boards/${boardId}/posts/search`,
      searchType,
      searchTerm,
      page,
      size,
      categoryId
    );
    console.log(`searchPost - ${url}`);
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    console.error('getPost-게시글을 불러오는데 실패했습니다.', error);
    return error;
  }
};

export const getPostByCategoryId = async (boardId, page, size, categoryId) => {
  try {
    const url = generatePaginationUrl(
      `/api/v1/boards/${boardId}/posts/search`,
      page,
      size,
      categoryId
    );
    console.log(`getPostByCategoryId - ${url}`);
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
    console.error('createPost-게시글 작성에 실패했습니다.', error);
    return error;
  }
};

export const updatePost = async (boardId, postId, postData) => {
  try {
    return await authInstance.put(
      `/api/v1/boards/${boardId}/posts/${postId}`,
      postData
    );
  } catch (error) {
    console.error('updatePost-게시글 수정에 실패했습니다.', error);
    return error;
  }
};

export const deletePost = async (postId) => {
  try {
    console.log('postId ', postId, ' 삭제요청');
    return await authInstance.delete(`/api/v1/boards/0/posts/${postId}`);
  } catch (error) {
    console.error('deletePost-게시글 삭제에 실패했습니다.', error);
    return error;
  }
};

export const toggleZzirit = async (postId) => {
  try {
    const url = `/api/v1/boards/0/posts/${postId}/zzirit`;
    console.log(`toggleZzirit - ${url}`);
    return await authInstance.post(url);
  } catch (error) {
    console.error('toggleZzirit-게시글 찌릿에 실패했습니다.', error);
    return error;
  }
};

export const countZziritByPostId = async (postId) => {
  try {
    const url = `/api/v1/boards/0/posts/${postId}/zzirit`;
    console.log(`countZziritByPostId - ${url}`);
    return await authInstance.get(url);
  } catch (error) {
    console.error(
      'countZziritByPostId-게시글 찌릿 조회에 실패했습니다.',
      error
    );
    return error;
  }
};

function generateSearchUrl(
  baseUrl,
  searchType,
  searchTerm,
  page,
  size,
  categoryId
) {
  let url = baseUrl;
  if (
    !(typeof searchType === 'undefined' || typeof searchType == null) ||
    !(typeof searchTerm === 'undefined' || typeof searchTerm == null) ||
    !(typeof page === 'undefined' || typeof page == null) ||
    !(typeof size === 'undefined' || typeof size == null) ||
    !(typeof categoryId === 'undefined' || typeof categoryId == null)
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
    if (!(typeof categoryId === 'undefined' || typeof categoryId == null)) {
      url += `categoryId=${categoryId}`;
    }
    return url;
  } else {
    return url;
  }
}

function generatePaginationUrl(baseUrl, page, size, categoryId) {
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
    if (!(typeof categoryId === 'undefined' || typeof categoryId == null)) {
      url += `categoryId=${categoryId}`;
    }
    return url;
  } else {
    return url;
  }
}
