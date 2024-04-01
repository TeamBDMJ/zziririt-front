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

function Streamers() {
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
      <div className="flex justify-between">
        <div className="text-4xl font-bold">스트리머 게시판</div>
        <button onClick={() => navigate('apply')} className="btn btn-xs mt-5">
          게시판 신청
        </button>
      </div>
      <div className="mt-1">
        * 마지막 활동이 8일 이상 경과된 게시판은 휴면상태로 변경됩니다
      </div>
      <div className="mt-1">
        * 본인의 게시판을 신청하고 싶다면 우측 상단{' '}
        <span key="spanBold" className="font-bold">
          게시판 신청
        </span>{' '}
        버튼을 눌러주세요.
      </div>
      <div key="streamerBoardWrapper" className="p-4 min-w-max border-2 mt-4">
        {streamersData.map((streamer) => (
          <div key={streamer.boardUrl}>
            <StreamerBoardDiv
              boardId={streamer.boardId}
              href={`/s/${streamer.boardUrl}`}
              streamerNickname={streamer.streamerNickname}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Streamers;
