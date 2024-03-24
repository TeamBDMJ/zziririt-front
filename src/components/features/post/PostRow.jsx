import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

export default function PostRow({ index, data }) {
  const { postId, title, memberId, nickname, hit, createdAt } = data;
  const navigate = useNavigate();
  const d = new Date(createdAt);
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000;

  useEffect(() => {
    formatDate();
  }, []);

  function formatDate() {
    if (diff < 60 * 1) {
      // 1분 미만일땐 방금 전 표기
      return '방금 전';
    }
    if (diff < 60 * 60 * 24 * 3) {
      // 3일 미만일땐 시간차이 출력(몇시간 전, 몇일 전)
      return formatDistanceToNow(d, { addSuffix: true, locale: ko });
    }
    return format(d, 'PPP EEE p', { locale: ko }); // 날짜 포맷
  }

  return (
    <div
      onClick={() => navigate(`/detailPost/${postId}`)}
      className="grid grid-cols-10 gap-2 p-2 text-white"
      key={index}
      id={postId}
    >
      <div className="col-span-1"></div>
      <div className="col-span-1"></div>
      <div className="col-span-5">{title}</div>
      <div className="col-span-1" key={memberId} id={memberId}>
        {nickname}
      </div>
      <div className="col-span-1">{formatDate(diff)}</div>
      <div className="col-span-1">{hit}</div>
    </div>
  );
}
