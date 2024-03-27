import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NaverLoginRedirect() {
  const navigate = useNavigate();
  function setAuthIntoLocalStorage() {
    const urlParams = new URLSearchParams(window.location.search);

    for (const [key, value] of urlParams.entries()) {
      localStorage.setItem(key, value);
    }
    localStorage.setItem('isLogin', true);
    navigate('/');
  }

  useEffect(() => {
    setAuthIntoLocalStorage();
  }, []);
}

export default NaverLoginRedirect;
