import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../apis/posts';
import ToastEditor from './ToastEditor';

export default function CreatePost({ type = 'edit' }) {
  const [title, setTitle] = useState('');
  const editorRef = useRef();
  const navigate = useNavigate();

  const onSubmitHandler = async () => {
    // 마크다운 형식
    if (title === '') {
        alert("제목을 입력해주세요!")
      return;
    }
    const content = editorRef.current?.getInstance().getHTML();
    const privateStatus = false;
    const postData = {
      title,
      content,
      privateStatus
    };
    console.log(title)
    console.log(content)
    console.log(postData)
    const res = await createPost(1, postData);
    navigate(-1);
  };
  const onExitHandler = () => {
    navigate(-1);
  };

  const onChangeTitleHandler = e => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <input type="text"
             placeholder="타이틀을 입력해주세요"
             value={title}
             onChange={onChangeTitleHandler} />
      <ToastEditor editorRef={editorRef} />

      <div>
        <button onClick={onExitHandler}>
             나가기
        </button>
        <button onClick={onSubmitHandler}>
          제출하기
        </button>
      </div>
    </div>
);
}
