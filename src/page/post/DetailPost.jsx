import React, { useEffect, useState } from 'react';
import CommentDiv from '../../components/features/post/detail/comment/CommentDiv';
import ToastViewer from '../../components/features/post/toast/ToastViewer';
import DetailPostTitle from '../../components/features/post/detail/DetailPostTitle';
import BoardInfo from '../../components/features/board/BoardInfo';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllPosts, getPost } from '../../apis/posts';

function DetailPost() {
  const params = useParams();
  const boardId = params.boardId;
  const postId = params.postId;
  const navigate = useNavigate();
  const [postData, setPostData] = useState('');

  useEffect(() => {
    getPost(boardId, postId).then((r) => {
      setPostData(r.content);
    });
  }, [boardId, postId]);

  const category = 'category';
  return (
    <div>
      <BoardInfo />
      <DetailPostTitle category={category} title={postData.title} />

      <ToastViewer contents={postData.content} />

      <div id="commentWrap">
        <CommentDiv data="댓글 내용" />
        <CommentDiv data="댓글 내용2" />
        <CommentDiv data="댓글 내용3" />
        <CommentDiv data="댓글 내용4" />
      </div>
    </div>
  );
}

export default DetailPost;
