import logo from '../assets/logo.png';
import { useEffect, useState } from 'react';

export default function Header() {
  const [change, setChange] = useState(true);
  const [userInfo, setUserInfo] = useState();
  const [isLogin, setIsLogin] = useState(false);
  // const onOpenDropDownHandler = () => {
  //     setIsOpenDropDown(!isOpenDropDown);
  // };

  //로그인시 isLogin 값 true로 변경
  useEffect(() => {
    console.log('엑세스 토큰 확인');
    const data = localStorage.getItem('accessToken');

    console.log(`data:${data}`);
    // 값이 있을때 true로 변경 - 로그인 상태
    setIsLogin(!!data);
  }, []); //넣어주어야 2번 실행안됨. 그런데도 2번실행되는 이유는 index.js에 stricmode가 개발시에는 두번 검사하게끔 자손까지 다돌아버림.

  return (
    <nav className="bg-[#1a1a1a] p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a rel="noopener noreferrer" href="/" aria-label="Homepage">
            <img src={logo} alt={'zziririt logo'} width={170} />
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white h-6 w-6"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white h-6 w-6"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white h-6 w-6"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          {isLogin ? (
            <div>로그인임</div>
          ) : (
            <a rel="noopener noreferrer" href="/login" aria-label="LoginButton">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#00b894] text-white">
                로그인
              </button>
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
