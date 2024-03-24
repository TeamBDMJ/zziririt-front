import DarkModeToggleButton from './header/DarkModeToggleButton';
import { useEffect } from 'react';
import LoginStatusButton from './header/LoginStatusButton';
import AnnouncementButton from './header/AnnouncementButton';
import PingPong from '../PingPong';

export default function HeaderDaisy({ isLogin, setIsLogin }) {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 pl-[50px]">
        <a href="/" className="btn btn-ghost text-xl">
          Zziririt
        </a>
      </div>
      <div className="flex-none">
        <AnnouncementButton />
        <LoginStatusButton isLogin={isLogin} setIsLogin={setIsLogin} />
        <DarkModeToggleButton />
      </div>
    </div>
  );
}
