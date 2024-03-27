import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMember } from '../../apis/members';

function Profile() {
  const navigate = useNavigate();
  const [myProfileData, setMyProfileData] = useState(null);

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  useEffect(() => {
    const checkIsLogin = () => {
      const authToken = localStorage.getItem('Authorization');
      const isLogin = localStorage.getItem('isLogin');
      if (!isLogin || authToken == null) {
        alert('로그인을 하셔야합니다.');
        navigate('/login');
      }
    };

    const getMyProfileDataFromApi = async () => {
      try {
        const res = await getMember(); // 비동기 호출
        setMyProfileData(res.content); // 상태 업데이트
      } catch (error) {
        console.error('프로필 데이터를 불러오는 데 실패했습니다.', error);
      }
    };

    checkIsLogin();
    getMyProfileDataFromApi();
  }, [navigate]); // navigate를 의존성 배열에 추가

  if (!myProfileData) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }

  return (
    <div>
      <div className="text-4xl font-bold pl-4">내 정보</div>
      <div className="p-8">
      <div>닉네임 : {myProfileData.nickname}  </div>
      <div>내 상태 : {myProfileData.memberStatus}  </div>
      <div>마지막 로그인 날짜 : {formatTimestamp(new Date(myProfileData.lastLogin).getTime())}  </div>
      </div>
    </div>
  );
}

export default Profile;