import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { createPost, getPosts } from '../../apis/posts';
import ToastEditor from '../../components/features/post/toast/ToastEditor';
import CheckBox from '../../components/features/post/write/CheckBox';
import PostSelect from '../../components/features/post/write/PostSelect';
import PostTitleInput from '../../components/features/post/write/PostTitleInput';
import {
  getBoardDataByBoardUrl,
  getCategoriesByBoardId,
} from '../../apis/boards';

export default function WritePost() {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const boardUrl = params.boardUrl;
  const editorRef = useRef();
  const [title, setTitle] = useState('');
  const [privateStatus, setPrivateStatus] = useState(false);
  const [boardId, setBoardId] = useState(0);
  const [categoryId, setCategoryId] = useState(5);
  const [categories, setCategories] = useState([]);

  const getBoardDataFromApi = async () => {
    const boardData = await getBoardDataByBoardUrl(boardUrl);
    setBoardId(boardData.content.boardId);
    setCategories(boardData.content.categoryList);
    setCategoryId(boardData.content.categoryList[0].categoryId);
  };

  //주소의 boardUrl 부분이 변경되면 board 정보를 받아옵니다.
  useEffect(() => {
    getBoardDataFromApi().then();
  }, [boardUrl]);

  const onSubmitHandler = async () => {
    // 마크다운 형식
    if (title === '') {
      alert('제목을 입력해주세요!');
      return;
    }
    const content = editorRef.current?.getInstance().getHTML();
    const postData = {
      title,
      content,
      categoryId,
      privateStatus,
    };
    const res = await createPost(boardId, postData);
    window.location.href = './';
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
        <PostSelect
          categories={categories}
          categoryId={categoryId}
          setCategoryId={setCategoryId}
        />
        <PostTitleInput
          onChange={onChangeTitleHandler}
          placeholder="제목을 입력해주세요"
        />
      </div>
      <div className="flex flex-row-reverse">
        <CheckBox
          onChange={onChangePrivateStatusHandler}
          checked={false}
          text={'비밀글 작성'}
        />
      </div>
      <div>
        <ToastEditor editorRef={editorRef} />
      </div>
      <div className="flex">
        <div className="flex-1"></div>
        <button
          className="btn btn-accent rounded-md m-1"
          onClick={onExitHandler}
        >
          나가기
        </button>
        <button
          className="btn btn-primary rounded-md m-1"
          onClick={onSubmitHandler}
        >
          제출하기
        </button>
      </div>
    </div>
  );
}
