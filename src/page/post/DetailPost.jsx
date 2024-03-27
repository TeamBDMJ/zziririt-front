import React, { useEffect, useState } from 'react';
import CommentDiv from '../../components/features/post/detail/comment/CommentDiv';
import ToastViewer from '../../components/features/post/toast/ToastViewer';
import DetailPostTitle from '../../components/features/post/detail/DetailPostTitle';
import {
  useLocation,
  useNavigate,
  useOutletContext,
  useParams,
} from 'react-router-dom';
import { deletePost, getPost } from '../../apis/posts';

function DetailPost() {
  const location = useLocation();
  const boardId = location.state.boardId;
  const boardName = location.state.boardName;
  const postId = location.state.postId;
  const navigate = useNavigate();
  const [postData, setPostData] = useState('');
  const [lastPostId, setLastPostId] = useState('');

  const getPostDataFromApi = async () => {
    const res = await getPost(localStorage.getItem('isLogin'), boardId, postId);
    setPostData(res.content); // 상태 업데이트
  };

  useEffect(() => {
    getPostDataFromApi().then();
    // setLastPostId(postData.postId)
  }, [boardId, postId]);

  const onClickUpdateHandler = async () => {
    navigate(`./update`, {
      state: {
        boardId: boardId,
        boardName: boardName,
        postId: postId,
        postData: postData,
      },
    });
  };

  const onClickDeleteHandler = async () => {
    const res = await deletePost(boardId, postId);
    navigate(`${isNaN(boardId) ? '/g/' + boardId : '/s/' + boardId}`, {
      state: {
        boardId: boardId,
        boardName: boardName,
        lastPostId: postData.postId,
      },
    });
  };

  return (
    <div>
      <DetailPostTitle postData={postData} />
      <div className="divider"></div>
      <div className="min-h-80">
        <ToastViewer content={postData.content} />
      </div>
      <div className="flex justify-center">
        <button className="btn btn-sm btn-secondary hover:btn-active mx-1 text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          찌릿 {postData.zziritCount}
        </button>
      </div>
      <div className="flex ">
        <div className="flex-1"></div>
        <div>
          {postData.permissionToUpdateStatus ? (
            <button
              className="btn btn-ghost hover:btn-link mx-1 transition transform hover:-translate-y-0.5"
              onClick={onClickUpdateHandler}
            >
              수정
            </button>
          ) : (
            ''
          )}
          {postData.permissionToDeleteStatus ? (
            <button
              className="btn btn-ghost hover:btn-link mx-1 transition transform hover:-translate-y-0.5"
              onClick={onClickDeleteHandler}
            >
              삭제
            </button>
          ) : (
            ''
          )}
        </div>
      </div>

      <div id="commentWrap" className="border-gray-100 border-4 p-2 mb-10">
        <CommentDiv data="댓글 내용(개발중)" />

        <div className="p-10 border-gray-100 border-2">댓글 작성창(개발중)</div>
      </div>
    </div>
  );
}

export default DetailPost;
