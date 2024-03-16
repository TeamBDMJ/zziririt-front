import Zziririt from '../Zziririt';
import LoginPage from '../page/LoginPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NaverLoginRedirect from '../components/AuthLoginRedirect';
import Support from '../page/Support';
import StreamerBoard from '../page/StreamerBoard';
import AsideRight from '../components/AsideRight';
import AsideLeft from '../components/AsideLeft';
import { useState } from 'react';
import Main from "../components/Main";

export default function Router() {
  const [data, setData] = useState(null); // 데이터를 관리할 상태 추가 자식 꺼를 받아와서 형제 컴포넌트에게 주려고 설정함.
  return (
    <BrowserRouter>
      <Header />
      <div className="min-h-screen bg-[#121212]">
        <div className="container mx-auto grid grid-cols-10 gap-4 p-4">
          <AsideLeft setData={setData} />{' '}
          {/* setData 함수를 AsideLeft에 props로 전달 */}
          <Routes>
            <Route path="/" element={<Main data={data} />} /> {/* data를 Main에 props로 전달 */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/naverLogin" element={<NaverLoginRedirect />} />
            {/*<Route path="/s" element={<StreamerBoard />} />*/}
            {/*<Route path="/mypage" element={<Mypage />} />*/}
            {/*<Route path="/detailpost/:postId" element={<DetailPost />} />*/}
            {/*<Route path="/editpost/:postId" element={<EditPost />} />*/}
            {/*<Route path="/createpost" element={<CreatePost />} />*/}
            <Route path="/support" element={<Support />} />
          </Routes>
          <AsideRight />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
