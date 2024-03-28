import { useNavigate } from 'react-router-dom';

function StreamerBoardDiv({ boardId, href, streamerNickname }) {
  const navigate = useNavigate();
  const onTitleClickHandler = () => {
    navigate(`${href}`, {
      state: {
        boardId: boardId,
        boardName: streamerNickname,
      },
    });
  };

  return (
    <a onClick={onTitleClickHandler}>
      {' '}
      ·{' '}
      <span className="text-blue-500 hover:cursor-pointer">
        {streamerNickname}
      </span>
    </a>
  );
}

export default StreamerBoardDiv;
