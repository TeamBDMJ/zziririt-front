import axios from 'axios';
import { OAuthLogin } from '../apis/auth';
import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';

function LoginPage() {
  // useRef 를 선언 해준다.
  const naverRef = useRef();
  const { naver } = window;

  // const NAVER_CLIENT_ID = process.env.REACT_APP_CLIENT_ID
  // const NAVER_CALLBACK_URL = process.env.REACT_APP_CALLBACK_URL

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      isPopup: false,
      // 버튼 타입 ( 색상, 타입, 크기 변경 가능 )
      loginButton: { color: 'green', type: 3, height: 58 },
      callbackHandle: true,
    });
    naverLogin.init();
  };

  // 네이버 소셜 로그인 (네아로) 는 URL 에 엑세스 어스코드가 붙어서 전달된다.
  // 우선 아래와 같이 어스코드를 추출 할 수 있으며,
  // 3부에 작성 될 Redirect 페이지를 통해 빠르고, 깨끗하게 처리가 가능하다.

  const userAccessToken = () => {
    window.location.href.includes('code') && getToken();
  };

  const getToken = () => {
    const authCode = window.location.href.split('=')[1].split('&')[0];
    console.log(`authCode:${authCode}`);
    // console.log, alert 창을 통해 어스코드가 잘 추출 되는지 확인하자!

    // 이후 로컬 스토리지 또는 state에 저장하여 사용하자!
    // localStorage.setItem('access_token', token)
    // setGetToken(token)
  };

  // 화면 첫 렌더링이후 바로 실행하기 위해 useEffect 를 사용하였다.
  useEffect(() => {
    initializeNaverLogin();
    userAccessToken();
  }, []);

  // handleClick 함수 onClick 이벤트 발생 시 useRef 를 통해 지정한 naverRef 항목이 클릭 된다.
  // current 를 통해 아래 div 태그의 ref={} 속성을 줄 수 있다. ( 자세한 내용은 공식문서를 확인하자. )
  const handleNaverLogin = () => {
    naverRef.current.children[0].click();
  };
  const onSignInHandler = async () => {
    // 로그인 정보를 초기화
    localStorage.clear();
    console.log('핸들러 작동');
    try {
      const res = await OAuthLogin('naver');
      console.log(`res:${res}`);
      localStorage.setItem('accessToken', res.headers.authorization);
      localStorage.setItem('isLogin', 'true');
      // userInfo redux 저장
      // const data = await getUser();
      // console.log(data);
      alert('로그인 완료');
      // closeEventHandler();
      window.location.reload();
    } catch (error) {
      alert('LoginPage.onSignInHandler - 로그인 실패');
    }
  };
  return (
    <div
      className="min-h-screen bg-[#121212] items-center text-white text-center"
      style={{
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <div className="flex justify-center">
        <NaverIdLogin ref={naverRef} id="naverIdLogin" />
        <NaverLoginBtn onClick={handleNaverLogin}>
          <NaverIcon alt="navericon" />
          <NaverLoginTitle>네이버로 로그인</NaverLoginTitle>
        </NaverLoginBtn>
      </div>
      <div>
      </div>
      <div>
        <button onClick={onSignInHandler}>Login</button>
      </div>
    </div>
  );
}

export default LoginPage;

const NaverIdLogin = styled.div`
  display: none;
`;

const NaverLoginBtn = styled.button`
  display: flex;
  align-items: center;
  width: 360px;
  height: 56px;
  background-color: #03c75a;
  border-radius: 6px;
`;

// 로그인 버튼 사용가이드 링크를 들어가면 이미지를 받아 이렇게 적용이 가능하다 !
const NaverIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  background: url('/btnG_naver.png') no-repeat center;
  background-size: 30px;
`;

const NaverLoginTitle = styled.span`
  margin-left: 90px;
  color: white;
  font-weight: 900;
  font-size: 14px;
  line-height: 24px;
`;
