import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

function BoardRow({ index, postData, boardId, boardGName }) {
  const {
    postId,
    zzirit,
    boardName,
    categoryId,
    categoryName,
    title,
    memberId,
    nickname,
    permissionToRead,
    privateStatus,
    hit,
    createdAt,
  } = postData;

  const navigate = useNavigate();
  const d = new Date(createdAt);
  const now = Date.now();
  const formattedD = format(d, 'yyyy-MM-dd');
  const formattedNow = format(Date.now(), 'yyyy-MM-dd');
  const diff = (now - d.getTime()) / 1000;

  useEffect(() => {
    formatDate();
  }, []);

  function formatDate() {
    if (formattedD === formattedNow) {
      // 하루 미만일땐 방금 전 표기
      return format(d, 'HH:mm', { locale: ko });
    }
    if (diff < 60 * 60 * 24 * 3) {
      // 3일 미만일땐 시간차이 출력(몇시간 전, 몇일 전)
      return formatDistanceToNow(d, { addSuffix: true, locale: ko });
    }
    return format(d, 'MM-dd', { locale: ko }); // 날짜 포맷
  }

  function onClickDetailPostHandler() {
    if (permissionToRead) {
      navigate(`./${postId}`);
    } else {
      alert('글을 읽을 권한이 없습니다.');
    }
  }
  return (
    <tr key={index} id={postId}>
      <th>{zzirit}</th>
      <td>{categoryName}</td>
      <td className={'cursor-pointer'} onClick={onClickDetailPostHandler}>
        {title}
      </td>
      <td key={memberId} id={memberId}>
        {nickname}
      </td>
      <td>{formatDate(diff)}</td>
      <td>{hit}</td>
    </tr>
  );
}

export default BoardRow;
