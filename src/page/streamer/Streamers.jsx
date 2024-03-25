import StreamerBoardDiv from '../../components/features/streamers/StreamerBoardDiv';
import { useEffect, useState } from 'react';
import { getPost } from '../../apis/posts';
import { getStreamerBoards } from '../../apis/boards';
import { useLocation, useNavigate } from 'react-router-dom';

function sortStreamers(streamers) {
  return streamers.sort((a, b) => {
    // 두 객체의 streamerName이 유효한지 확인합니다.
    if (!a.streamerNickname || !b.streamerNickname) {
      return 0; // 유효하지 않은 경우 정렬 순서를 변경하지 않습니다.
    }
    return a.streamerNickname.localeCompare(b.streamerNickname, 'ko-KR');
  });
}

function Streamers({ setStreamerBoardId }) {
  const navigate = useNavigate();
  const [streamersData, setStreamersData] = useState([]);

  useEffect(() => {
    getStreamerBoards().then((r) => {
      const stData = sortStreamers(r.content);
      setStreamersData(stData);
    });
  }, []);

  return (
    <div key="streamer">
      {streamersData.map((streamer) => (
        <div>
          <StreamerBoardDiv
            key={streamer.boardUrl}
            boardId={streamer.boardId}
            href={`/s/${streamer.boardUrl}`}
            streamerNickname={streamer.streamerNickname}
          />
        </div>
      ))}
    </div>
  );
}

export default Streamers;
