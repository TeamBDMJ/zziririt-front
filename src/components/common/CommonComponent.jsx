import PingPong from '../PingPong';
import { Outlet, useLocation } from 'react-router-dom';
import MenuDevide from './menu/MenuDevide';
import Home from './Home';
import RightSideBar from './rightSideBar/RightSideBar';
import styled from '@emotion/styled';
import React, { useState } from 'react';

function CommonComponent() {
  const location = useLocation();
  const [streamerBoardId, setStreamerBoardId] = useState()
  const checkMain = () => {
    if (location.pathname === '/') {
      return <Home />;
    } else {
      return <Outlet context={streamerBoardId}/>;
    }
  };

  return (
    <StCommonComponent className="container mx-auto grid grid-cols-10 gap-4 p-4">
      <div className="col-span-2">
        <MenuDevide title={'찌리릿'} />
      </div>
      <div className="col-span-6 p-2">{checkMain()}</div>
      <div className="col-span-2">
        <RightSideBar />
      </div>
    </StCommonComponent>
  );
}

export default CommonComponent;

const StCommonComponent = styled.div`
  margin: 0 auto;
  @media (max-width: 1440px) {
    width: 1024px;
  }
  @media (max-width: 1080px) {
    width: calc(100% - 2rem);
  }
`;
