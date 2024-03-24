import React, { useEffect } from 'react';

function LoginStatusButton({ isLogin, setIsLogin }) {
  useEffect(() => {
    const accessToken = localStorage.getItem('Authorization');
    setIsLogin(!!accessToken);
  }, []);

  const onLogoutHandler = () => {
    localStorage.removeItem('Authorization');
    window.location.reload();
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
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
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
