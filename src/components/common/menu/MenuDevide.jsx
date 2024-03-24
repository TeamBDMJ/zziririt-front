import MenuRow from './MenuRow';
import MenuIconHome from './icon/MenuIconHome';
import MenuIconInfo from './icon/MenuIconInfo';
import { useNavigate } from 'react-router-dom';

function MenuDevide({ title }) {
  const navigate = useNavigate();
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
            onClick={() => navigate('/g/all')}
            icon={MenuIconInfo()}
            menuName="전체 글 보기"
          />
          <MenuRow
            onClick={() => navigate('/g/fb')}
            icon={MenuIconInfo()}
            menuName="자유 게시판"
          />
          <MenuRow
            onClick={() => navigate('/g/popular')}
            icon={MenuIconInfo()}
            menuName="인기 게시판"
          />
          <MenuRow
            onClick={() => navigate('/streamer')}
            icon={MenuIconInfo()}
            menuName="스트리머 게시판"
          />
          <MenuRow
            onClick={() => navigate('/g/ad')}
            icon={MenuIconInfo()}
            menuName="방송 홍보"
          />
          <MenuRow
            onClick={() => navigate('/g/announcement')}
            icon={MenuIconInfo()}
            menuName="공지사항"
          />
        </ul>
      </li>
      <li>
        <h2 className="menu-title">sub group2</h2>
        <ul>
          <MenuRow
            onClick={() => navigate('/')}
            icon={MenuIconHome()}
            menuName="Home"
          />
          <MenuRow
            onClick={() => navigate('/g/all')}
            icon={MenuIconInfo()}
            menuName="전체 글 보기"
          />
          <MenuRow
            onClick={() => navigate('/g/fb')}
            icon={MenuIconInfo()}
            menuName="자유 게시판"
          />
          <MenuRow
            onClick={() => navigate('/streamer')}
            icon={MenuIconInfo()}
            menuName="스트리머 게시판"
          />
          <MenuRow
            onClick={() => navigate('/g/ad')}
            icon={MenuIconInfo()}
            menuName="방송 홍보"
          />
          <MenuRow
            onClick={() => navigate('/g/announcement')}
            icon={MenuIconInfo()}
            menuName="공지사항"
          />
        </ul>
      </li>
    </ul>
  );
}

export default MenuDevide;
