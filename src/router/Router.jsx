import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import HeaderDaisy from '../components/common/HeaderDaisy';
import FooterDaisy from '../components/common/FooterDaisy';
import CommonComponent from '../components/common/CommonComponent';
import BoardCommonComp from '../page/board/BoardCommonComp';
import LoginPage from '../page/login/LoginPage';
import NaverLoginRedirect from '../page/login/AuthLoginRedirect';
import Profile from '../page/profile/Profile';
import Streamers from '../page/streamer/Streamers';
import WritePost from '../page/post/WritePost';
import DetailPost from '../page/post/DetailPost';
import BoardTable from '../page/board/BoardTable';
import UpdatePost from '../page/post/UpdatePost';
import HealthCheck from '../page/HealthCheck';
import Support from '../page/cs/Support';
import ApplyStreamerBoard from '../page/streamer/ApplyStreamerBoard';
import IconShop from '../page/shop/IconShop';

function Router() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <BrowserRouter>
      <HeaderDaisy isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path="/*" element={<CommonComponent />}>
          <Route path="g/:boardId/*" element={<BoardCommonComp />}>
            <Route path="" element={<BoardTable />} />
            <Route path=":postId" element={<DetailPost />} />
            <Route path="write" element={<WritePost />} />
            <Route path=":postId/update" element={<UpdatePost />} />
          </Route>
          <Route path="s/:streamerId/*" element={<BoardCommonComp />}>
            <Route path="" element={<BoardTable />} />
            <Route path=":postId" element={<DetailPost />} />
            <Route path="write" element={<WritePost />} />
            <Route path=":postId/update" element={<UpdatePost />} />
          </Route>
          <Route path="streamer" element={<Streamers />}></Route>
          <Route path="streamer/apply" element={<ApplyStreamerBoard />} />
          <Route path="iconShop" element={<IconShop />} />
          <Route path="event" element={<IconShop />} />
        </Route>
        <Route
          path="/naverLogin"
          element={<NaverLoginRedirect setIsLogin={setIsLogin} />}
        />
        <Route path="/myProfile" element={<Profile isLogin={isLogin} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/support" element={<Support />} />
        <Route path="/health" element={<HealthCheck />} />
      </Routes>
      <FooterDaisy />
    </BrowserRouter>
  );
}

export default Router;
