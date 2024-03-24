import MenuDevide from '../components/common/menu/MenuDevide';
import Home from '../components/common/Home';
import RightSideBar from '../components/common/rightSideBar/RightSideBar';
import styled from '@emotion/styled';

function Index() {
  return (
    <StIndex className="container mx-auto grid grid-cols-10 gap-4 p-4">
      <div className="col-span-2">
        <MenuDevide title={'찌리릿'} />
      </div>
      <div className="col-span-6">
        <Home />
      </div>
      <div className="col-span-2">
        <RightSideBar />
      </div>
    </StIndex>
  );
}

export default Index;

const StIndex = styled.div`
  margin: 0 auto;
  @media (max-width: 1440px) {
    width: 1024px;
  }
  @media (max-width: 1080px) {
    width: calc(100% - 2rem);
  }
`;
