import { useEffect } from 'react';

function NaverLoginRedirect({ setIsLogin }) {
  function setAuthIntoLocalStorage() {
    const urlParams = new URLSearchParams(window.location.search);

    for (const [key, value] of urlParams.entries()) {
      localStorage.setItem(key, value);
    }
    window.location.href = '/';
  }

  useEffect(() => {
    setAuthIntoLocalStorage();
  }, []);
}

export default NaverLoginRedirect;
