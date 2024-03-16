import { useLocation } from 'react-router-dom';

export default function NaverLoginRedirect() {
  const currentUrl = window.location.href;

  // window.location.hash를 사용하여 현재 URL의 해시 부분을 가져옵니다.
  // 해시 값의 맨 앞에 있는 '#' 문자를 제거합니다.
  const hash = window.location.hash.substring(1);

  // '&'를 기준으로 각 파라미터를 분리합니다.
  const params = hash.split('&');

  // Map 객체를 생성하여 각 key-value 쌍을 저장합니다.
  const paramMap = new Map();

  params.forEach((param) => {
    // '='를 기준으로 key와 value를 분리합니다.
    const [key, value] = param.split('=');
    paramMap.set(key, decodeURIComponent(value));
  });

  return (
    <div>
      <p>현재 경로는 {currentUrl} </p>
      <p>access_token: {paramMap.get('access_token')} </p>
      <p>state: {paramMap.get('state')} </p>
      <p>token_type: {paramMap.get('token_type')} </p>
      <p>expires_in: {paramMap.get('expires_in')} </p>
    </div>
  );
}
