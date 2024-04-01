import React, { useEffect, useRef, useState } from 'react';
import CommentDiv from '../../components/features/post/detail/comment/CommentDiv';
import ToastViewer from '../../components/features/post/toast/ToastViewer';
import DetailPostTitle from '../../components/features/post/detail/DetailPostTitle';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  countZziritByPostId,
  createPost,
  deletePost,
  getPost,
  toggleZzirit,
} from '../../apis/posts';
import { AiFillThunderbolt, AiOutlineThunderbolt } from 'react-icons/ai';
import CheckBox from '../../components/features/post/write/CheckBox';
import { createComment } from '../../apis/comments';
import { FaRegCommentDots } from 'react-icons/fa';

function DetailPost() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const postId = params.postId;
  const [postData, setPostData] = useState({});
  // postData 구조
  // blindStatus, boardId, boardName, categoryId, categoryName, commentResponses,
  // content, createdAt, hit, memberId, nickname, permissionToDeleteStatus,
  // permissionToUpdateStatus, postId, privateStatus, title, zziritCount, isZzirit
  const [isZzirit, setZzirit] = useState(false);
  const [zziritCount, setZziritCount] = useState(postData.zziritCount);
  const [commentResponses, setCommentResponses] = useState(
    postData.commentResponses
  );

  const [commentContent, setCommentContent] = useState('');
  const [privateStatus, setPrivateStatus] = useState(false);

  const getPostDataFromApi = async () => {
    const res = await getPost(localStorage.getItem('isLogin'), postId);
    setPostData(res.content);
    setZzirit(res.content.isZzirit);
    setZziritCount(res.content.zziritCount);
    setCommentResponses(res.content.commentResponses);
  };

  useEffect(() => {
    getPostDataFromApi().then();
  }, []);

  const onClickUpdateHandler = async () => {
    navigate(`./update`, {
      state: {
        postData: postData,
      },
    });
  };

  const onClickDeleteHandler = async () => {
    const res = await deletePost(postId);
    alert('게시글 삭제가 완료되었습니다!');
    window.location.href = './';
  };

  const onClickZziritHandler = async () => {
    if (localStorage.getItem('isLogin')) {
      const res = await toggleZzirit(postId);
      const zziritCountRes = await countZziritByPostId(postId);
      setZzirit(res.data.content.isZzirit);
      setZziritCount(zziritCountRes.data.content);
      if (isZzirit) {
        return <AiFillThunderbolt />;
      } else {
        return <AiOutlineThunderbolt />;
      }
    } else {
      alert('로그인이 필요한 기능입니다!');
    }
  };

  const setZziritIcon = () => {
    if (localStorage.getItem('isLogin')) {
      if (isZzirit) {
        return <AiFillThunderbolt />;
      } else {
        return <AiOutlineThunderbolt />;
      }
    }
    return <AiOutlineThunderbolt />;
  };

  const onSubmitCommentHandler = async () => {
    if (!(localStorage.getItem('isLogin'))) {
      alert('로그인이 필요한 기능입니다!');
      return;
    }

    if (commentContent === '') {
      alert('댓글을 입력해주세요!');
      return;
    }
    console.log('댓글 작성 상태');
    console.log(privateStatus);
    const commentRequest = {
      content: commentContent,
      privateStatus: privateStatus,
    };
    const res = await createComment(postId, commentRequest);
    getPostDataFromApi().then();
  };

  const onChangeCommentContentHandler = (e) => {
    setCommentContent(e.target.value);
  };

  const onChangePrivateStatusHandler = (e) => {
    if (e.target.checked) {
      setPrivateStatus(true);
    } else {
      setPrivateStatus(false);
    }
  };

  return (
    <div>
      <DetailPostTitle postData={postData} />
      <div className="divider"></div>
      <div className="min-h-80">
        <ToastViewer content={postData.content} />
      </div>
      <div className="flex justify-center">
        <button
          onClick={onClickZziritHandler}
          className="btn btn-sm btn-primary transition hover:btn-active mx-1 text-lg"
        >
          {setZziritIcon()}
          찌릿 {zziritCount}
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
        <div className="flex" key="commentsNumberKey">
          <FaRegCommentDots />{' '}
          <div className="pl-2">
            댓글 {commentResponses && commentResponses.length}개
          </div>
        </div>
        <div id="commentContentWrapper" className="space-y-2">
          {commentResponses &&
            commentResponses.map((comment, index) => (
              <CommentDiv
                comment={comment}
                getPostDataFromApi={getPostDataFromApi}
              />
            ))}
        </div>
        <div className="p-10 border-gray-100 border-2">
          <textarea
            onChange={onChangeCommentContentHandler}
            className="textarea textarea-success w-full"
            placeholder="댓글 작성"
          ></textarea>
          <div className="flex justify-between space-x-1">
            <CheckBox
              onChange={onChangePrivateStatusHandler}
              text={'비밀 댓글'}
            />
            <button
              className="btn btn-primary grow hover:bg-primary/90 rounded-md"
              onClick={onSubmitCommentHandler}
            >
              댓글쓰기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPost;
