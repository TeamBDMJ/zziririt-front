import { useNavigate } from 'react-router-dom';

function StreamerBoardDiv({ boardId, href, streamerName }) {
  const navigate = useNavigate()
  const onTitleClickHandler = () => {
    navigate(`/s/${href}`, {
      state: {
        boardId: boardId
      }
    })
  };
  <a onClick={onTitleClickHandler}>{streamerName}</a>;
  return <Link to="경로">링크명</Link>
}

export default StreamerBoardDiv;
