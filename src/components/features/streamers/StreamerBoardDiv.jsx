import { useNavigate } from 'react-router-dom';

function StreamerBoardDiv({ boardId, href, streamerNickname }) {
  const navigate = useNavigate();
  const onTitleClickHandler = () => {
    navigate(`${href}`, {
      state: {
        boardId: boardId,
        streamerNickname: streamerNickname,
      },
    });
  };

  return <a onClick={onTitleClickHandler}>{streamerNickname}</a>;
}

export default StreamerBoardDiv;
