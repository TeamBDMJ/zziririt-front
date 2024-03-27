import styled from '@emotion/styled';

function LoginPage() {
  const naverLoginUrl = process.env.REACT_APP_API_URL;
  return (
    <div
      className="min-h-screen items-center  text-center"
      style={{
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <div className="flex justify-center">
        <NaverIdLogin id="naverIdLogin" />
        <NaverLoginBtn href={`${naverLoginUrl}/api/v1/oauth2/login/naver`}>
          <NaverIcon alt="navericon" />
          <NaverLoginTitle>네이버로 로그인</NaverLoginTitle>
        </NaverLoginBtn>
      </div>
    </div>
  );
}

export default LoginPage;

const NaverIdLogin = styled.div`
  display: none;
`;

const NaverLoginBtn = styled.a`
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
