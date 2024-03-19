import { useEffect } from 'react';

export default function NaverLoginRedirect({setIsLogin}) {
  function setAuthIntoLocalStorage() {
    localStorage.clear();
    const urlParams = new URLSearchParams(window.location.search);

    for (const [key, value] of urlParams.entries()) {
      localStorage.setItem(key, value);
    }
    window.location.href = '/';
  }

  useEffect(() => {
    setAuthIntoLocalStorage()
  }, []);

}
