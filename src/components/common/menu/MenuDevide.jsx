import MenuRow from './MenuRow';
import MenuIconHome from './icon/MenuIconHome';
import MenuIconInfo from './icon/MenuIconInfo';
import { useNavigate } from 'react-router-dom';

function MenuDevide({ title }) {
  const navigate = useNavigate();

  const menuList = [];

  return (
    <ul className="menu bg-base-200 w-auto rounded-box">
      <li>
        <h2 className="menu-title">{title}</h2>
        <ul>
          <MenuRow
            onClick={() => navigate('/')}
            icon={MenuIconHome()}
            menuName="Home"
          />
          <MenuRow
            onClick={() => {
              navigate('/g/all', {
                state: {
                  boardId: 'all',
                  boardName: '전체 글 보기',
                },
              });
            }}
            icon={MenuIconInfo()}
            menuName="전체 글 보기"
          />
          <MenuRow
            onClick={() => {
              navigate('/g/fb', {
                state: {
                  boardId: 1,
                  boardName: '자유 게시판',
                },
              });
            }}
            icon={MenuIconInfo()}
            menuName="자유 게시판"
          />
          <MenuRow
            onClick={() => {
              navigate('/g/humor', {
                state: {
                  boardId: 3,
                  boardName: '유머 게시판',
                },
              });
            }}
            icon={MenuIconInfo()}
            menuName="유머 게시판"
          />
          <MenuRow
            onClick={() => navigate('/streamer')}
            icon={MenuIconInfo()}
            menuName="스트리머 게시판"
          />
        </ul>
      </li>
      <li>
        <h2 className="menu-title p-4"></h2>
        <ul>
          <MenuRow
            onClick={() => {
              navigate('/g/announcement', {
                state: {
                  boardId: 2,
                  boardName: '공지사항',
                },
              });
            }}
            icon={MenuIconInfo()}
            menuName="공지사항"
          />
          <MenuRow
            onClick={() => {
              navigate('/event');
            }}
            icon={MenuIconInfo()}
            menuName="이벤트"
          />
        </ul>
      </li>
      <li>
        <h2 className="menu-title p-4"></h2>
        <ul>
          <MenuRow
            onClick={() => {
              navigate('/iconShop');
            }}
            icon={MenuIconInfo()}
            menuName="아이콘샵"
          />
          {/*<MenuRow*/}
          {/*  onClick={() => navigate('/g/ad')}*/}
          {/*  icon={MenuIconInfo()}*/}
          {/*  menuName="방송 홍보"*/}
          {/*/>*/}
          {/*<MenuRow*/}
          {/*  onClick={() => navigate('/g/announcement')}*/}
          {/*  icon={MenuIconInfo()}*/}
          {/*  menuName="공지사항"*/}
          {/*/>*/}
        </ul>
      </li>
    </ul>
  );
}

export default MenuDevide;
