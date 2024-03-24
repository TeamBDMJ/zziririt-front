import LoginPage from '../page/login/LoginPage';
import Header from '../components/Header';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import NaverLoginRedirect from '../page/login/AuthLoginRedirect';
import Support from '../page/cs/Support';
import AsideLeft from '../components/AsideLeft';
import React, { useState } from 'react';
import WritePost from '../page/post/WritePost';
import AsideRight from '../components/AsideRight';
import HeaderDaisy from '../components/common/HeaderDaisy';
import FooterDaisy from '../components/common/FooterDaisy';
import Index from '../page/Index';

export default function OldRouter() {
  const [data, setData] = useState(null); // 데이터를 관리할 상태 추가 자식 꺼를 받아와서 형제 컴포넌트에게 주려고 설정함.
  const [isLogin, setIsLogin] = useState(false);
  const unviewRoute = ['/login', '/naverLogin'];

  function AsideLeftView() {
    const location = useLocation();
    const isViewRoute = unviewRoute.includes(location.pathname);

    if (!isViewRoute) {
      return <AsideLeft />;
    }
    return null;
  }

  function AsideRightView() {
    const location = useLocation();
    const isViewRoute = unviewRoute.includes(location.pathname);

    if (!isViewRoute) {
      return <AsideRight />;
    }
    return null;
  }

  return (
    <BrowserRouter>
      <HeaderDaisy isLogin={isLogin} setIsLogin={setIsLogin} />
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes></Routes>
      <div className="min-h-screen bg-[#121212]">
        <div className="container mx-auto grid grid-cols-10 gap-4 p-4">
          <AsideLeftView />
          {/* setData 함수를 AsideLeft에 props로 전달 */}
          <div className="col-span-6">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/naverLogin"
                element={<NaverLoginRedirect setIsLogin={setIsLogin} />}
              />
              <Route path="/board/all" />
              <Route
                path="/streamer/*"
                element={
                  {
                    /*<OldBoard data={data} />*/
                  }
                }
              >
                <Route
                  path=":cardId"
                  element={
                    {
                      /*<DetailCard />*/
                    }
                  }
                />
              </Route>
              <Route path="/board/ad" />
              {/* data를 Main에 props로 전달 */}
              {/*<Route path="/s" element={<Streamers />} />*/}
              {/*<Route path="/mypage" element={<Mypage />} />*/}
              {/*<Route path="/detailpost/:postId" element={<DetailPost />} />*/}
              {/*<Route path="/editpost/:postId" element={<EditPost />} />*/}
              <Route path="/createPost" element={<WritePost />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </div>
          <AsideRightView />
        </div>
      </div>
      <FooterDaisy />
    </BrowserRouter>
  );
}
