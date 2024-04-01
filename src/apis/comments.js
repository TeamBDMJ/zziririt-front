import { authInstance } from './axiosInstances';

export const createComment = async (postId, commentRequest) => {
  try {
    const url = `/api/v1/boards/0/posts/${postId}/comments`;
    // console.log(`createComment - ${url}`);
    return await authInstance.post(url, commentRequest);
  } catch (error) {
    console.error('createComment-댓글 작성이 실패했습니다.', error);
    return error;
  }
};

export const updateComment = async (boardId, postId, postData) => {
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

export const deleteComment = async (commentId) => {
  try {
    const url = `/api/v1/boards/0/posts/0/comments/${commentId}`;
    // console.log(`createComment - ${url}`);
    return await authInstance.delete(url);
  } catch (error) {
    console.error('deletePost-게시글 삭제에 실패했습니다.', error);
    return error;
  }
};
