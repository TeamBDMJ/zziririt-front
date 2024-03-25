import BoardRow from '../../components/features/board/BoardRow';
import Pagination from '../../components/features/post/Pagination';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getAllPosts, getPosts } from '../../apis/posts';

function BoardTable() {
  const location = useLocation();
  const boardId = location.state.boardId;
  const boardName = location.state.boardName;
  console.log(boardId,"   ", boardName)
  const [boardRowsData, setBoardRowsData] = useState();
  const [boardPage, setBoardPage] = useState(0);
  const [boardRowSize, setBoardRowSize] = useState(30);

  const getBoardDataFromApi = async () => {
    let data = undefined;
    switch (boardId) {
      case 'all':
        data = (await getAllPosts(boardPage, boardRowSize));
        break;
      case 'popular':
        data = (await getAllPosts(boardPage, boardRowSize));
        break;
      case 'announcement':
        data = (await getPosts(2));
        break;
      default:
        console.log(`default: ${boardId} ${boardName}`)
        data = (await getPosts(boardId));
        break;
    }
    setBoardRowsData(data); // 함수형 업데이트 사용
  };

  useEffect(() => {
    getBoardDataFromApi().then();
  }, [boardId, boardName]);

  const boardContent =
    boardRowsData && boardRowsData.content && boardRowsData.content.content;
  return (
    <div>
      <table className="table table-xs">
        <thead>
        <tr>
          <th>찌릿</th>
          <th>카테고리</th>
          <th>제목</th>
          <th>닉네임</th>
          <th>작성일</th>
          <th>조회수</th>
        </tr>
        </thead>
        <tbody>
        {boardContent &&
          boardContent.map((postData, index) => (
            <BoardRow postData={postData} index={index} />
          ))}
        </tbody>
      </table>
      <div className="flex justify-center">
        <Pagination currentPage={boardPage} />
      </div>
    </div>
  );
}

export default BoardTable;
