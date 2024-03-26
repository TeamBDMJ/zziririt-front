import { createPost, deletePost, getPost, updatePost } from '../../apis/posts';
import PostSelect from '../../components/features/post/write/PostSelect';
import PostTitleInput from '../../components/features/post/write/PostTitleInput';
import CheckBox from '../../components/features/post/write/CheckBox';
import ToastEditor from '../../components/features/post/toast/ToastEditor';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function UpdatePost() {
  const location = useLocation();
  const boardId = location.state.boardId;
  const postId = location.state.postId;
  const boardName = location.state.boardName;
  const oldPostData = location.state.postData;
  const navigate = useNavigate();
  const [postData, setPostData] = useState('');
  const [title, setTitle] = useState(oldPostData.title);
  const [privateStatus, setPrivateStatus] = useState(oldPostData.privateStatus);
  const editorRef = useRef();

  const getPostDataFromApi = async () => {
    const res = await getPost(localStorage.getItem('isLogin'), boardId, postId);
    setPostData(res.content); // 상태 업데이트
  };

  useEffect(() => {
    getPostDataFromApi().then();
  }, [boardId, postId, privateStatus]);

  const onSubmitHandler = async () => {
    if (title === '') {
      alert('제목을 입력해주세요!');
      return;
    }
    const content = editorRef.current?.getInstance().getHTML();
    const postData = {
      title,
      content,
      privateStatus,
    };
    const res = await updatePost(boardId, postId, postData);
    console.log(res)

    navigate(-1, {
      state: {
        boardId: boardId,
        boardName: boardName,
        lastPostId: res.data
      }});
  };
  const onExitHandler = () => {
    navigate(-1);
  };

  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
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
      <div className="flex">
        <PostSelect />
        <PostTitleInput
          onChange={onChangeTitleHandler}
          placeholder="제목을 입력해주세요"
          value={title}
        />
      </div>
      <div className="flex flex-row-reverse">
        <CheckBox onChange={onChangePrivateStatusHandler} checked={oldPostData.privateStatus} text={'비밀글 작성'} />
      </div>
      <div>
        <ToastEditor editorRef={editorRef} content={oldPostData.content} />
      </div>
      <div className="flex">
        <div className="flex-1"></div>
        <button
          className="btn btn-accent rounded-md m-1"
          onClick={onExitHandler}
        >
          뒤로가기
        </button>
        <button
          className="btn btn-primary rounded-md m-1"
          onClick={onSubmitHandler}
        >
          수정하기
        </button>
      </div>
    </div>
  );
}

export default UpdatePost;
