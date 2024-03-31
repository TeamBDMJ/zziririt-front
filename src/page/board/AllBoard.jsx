import React, { useEffect, useState } from 'react';
import BoardInfo from '../../components/features/board/BoardInfo';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getAllPosts, getPosts } from '../../apis/posts';
import { getBoardDataByBoardUrl } from '../../apis/boards';

function AllBoard() {
  const params = useParams();
  let [boardId, setBoardId] = useState(0);
  const [boardName, setBoardName] = useState('전체 글 보기');

  const [boardRowsData, setBoardRowsData] = useState({});
  const [boardPage, setBoardPage] = useState(0);
  const [boardRowSize, setBoardRowSize] = useState(30);

  const getBoardDataFromApi = async () => {
    let data = await getAllPosts(
      localStorage.getItem('isLogin'),
      boardPage,
      boardRowSize
    );

    setBoardRowsData(data);
  };

  useEffect(() => {
    getBoardDataFromApi().then();
  }, []);

  return (
    <div className="overflow-x-auto">
      <BoardInfo boardName={boardName} categories={null} />
      <Outlet
        context={{
          boardRowsData,
          boardId,
          boardName,
          boardPage,
          setBoardPage,
          setBoardRowsData,
        }}
      />
    </div>
  );
}

export default AllBoard;
