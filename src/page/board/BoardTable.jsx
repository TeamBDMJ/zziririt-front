import BoardRow from '../../components/features/board/BoardRow';
import Pagination from '../../components/features/post/Pagination';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllPosts, getPosts } from '../../apis/posts';

function BoardTable() {
  const params = useParams();
  const boardId = params.boardId;
  const streamerId = params.streamerId;
  const navigate = useNavigate();
  const [boardRowsData, setBoardRowsData] = useState([]);
  const [boardPage, setBoardPage] = useState(0);
  const [boardRowSize, setBoardRowSize] = useState(30);
  const fetchPosts = async () => {
    try {
      const response = await axios.get('/api/v1/boards/1/posts');
      setBoardRowsData(response.data);
    } catch (error) {
      console.error('게시글을 불러오는데 실패했습니다.', error);
    }
  };
  const getBoardDataFromApi = async () => {
    switch (boardId) {
      case 'all':
        setBoardRowsData(await getAllPosts(boardPage, boardRowSize));
        break;
      case 'popular':
        setBoardRowsData(await getAllPosts(boardPage, boardRowSize));
        break;
      case 'announcement':
        setBoardRowsData(await getPosts(2));
        break;
      default:
        setBoardRowsData(await getPosts(3));
        break;
    }
  };

  useEffect(() => {
    getBoardDataFromApi().then();
  }, []);
  const boardContent = boardRowsData && boardRowsData.content && boardRowsData.content.content;
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
