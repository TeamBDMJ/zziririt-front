import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import HeaderDaisy from '../components/common/HeaderDaisy';
import FooterDaisy from '../components/common/FooterDaisy';
import CommonComponent from '../components/common/CommonComponent';
import BoardCommonComp from '../components/features/board/BoardCommonComp';
import LoginPage from '../page/login/LoginPage';
import NaverLoginRedirect from '../page/login/AuthLoginRedirect';
import Profile from '../page/profile/Profile';
import OldBoard from '../components/OldBoard';
import ToastViewer from '../components/features/post/toast/ToastViewer';
import Streamers from '../page/streamer/Streamers';
import WritePost from '../page/post/WritePost';
import DetailPost from '../page/post/DetailPost';

function Router() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <BrowserRouter>
      <HeaderDaisy isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path="/" element={<CommonComponent />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/naverLogin"
          element={<NaverLoginRedirect setIsLogin={setIsLogin} />}
        />
        <Route path="/myProfile" element={<Profile isLogin={isLogin} />} />
        <Route path="/g/*" element={<CommonComponent />}>
          <Route path=":boardId" element={<BoardCommonComp />} />
          <Route path=":boardId/:postId" element={<DetailPost />} />
          <Route path=":boardId/write" element={<WritePost />} />
          <Route path="ol" element={<OldBoard />} />
        </Route>
        <Route path="/streamer" element={<CommonComponent />}>
          <Route path="" element={<Streamers />} />
        </Route>
        <Route path="/s/*" element={<CommonComponent />}>
          <Route path=":streamerId" element={<BoardCommonComp />} />
          <Route path=":streamerId/:postId" element={<DetailPost />} />
          <Route path=":streamerId/write" element={<WritePost />} />
        </Route>
      </Routes>
      <FooterDaisy />
    </BrowserRouter>
  );
}

export default Router;
