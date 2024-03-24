import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile(isLogin) {
  const navigate = useNavigate();
  useEffect(() => {
    checkIsLogin();
  }, []);

  const checkIsLogin = () => {
    const authToken = localStorage.getItem('Authorization');
    if (!isLogin || authToken == null) {
      alert('로그인을 하셔야합니다.');
      navigate('/login');
    }
  };

  return <div className="flex justify-center">여기는 프로파일 페이지</div>;
}

export default Profile;
