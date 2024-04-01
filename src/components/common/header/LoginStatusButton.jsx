import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginStatusButton({ isLogin, setIsLogin }) {
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem('Authorization');
    setIsLogin(!!accessToken);
  }, []);

  const onLogoutHandler = () => {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('isLogin');
    setIsLogin(false);
    navigate('/');
  };

  return (
    <div>
      {isLogin ? (
        // 로그인
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="/default-profile.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between" href="/myProfile">
                Profile
                {/*<span className="badge">New</span>*/}
              </a>
            </li>
            {/*<li><a href="/setting">Settings</a></li>*/}
            <li>
              <a onClick={onLogoutHandler}>Logout</a>
            </li>
          </ul>
        </div>
      ) : (
        // 비로그인
        <a className="btn" href="/login">
          로그인
        </a>
      )}
    </div>
  );
}

export default LoginStatusButton;
