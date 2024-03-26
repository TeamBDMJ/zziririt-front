import React, { useEffect, useState } from 'react';
import BoardInfo from '../../components/features/board/BoardInfo';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getAllPosts, getPosts } from '../../apis/posts';

function BoardCommonComp() {
  const location = useLocation();
  const navigate = useNavigate();
  // const [boardId, setBoardId] = useState(location.state.boardId);
  // const [boardName, setBoardName] = useState(location.state.boardName);
  const boardId= location.state.boardId;
  const boardName = location.state.boardName;
  const lastPostId = location.state.lastPostId;
  const [boardRowsData, setBoardRowsData] = useState();
  const [boardPage, setBoardPage] = useState(0);
  const [boardRowSize, setBoardRowSize] = useState(30);
  console.log(boardId, ' ', boardName);

  const getBoardDataFromApi = async () => {
    let data = undefined;
    switch (boardId) {
      case 'all':
        data = (await getAllPosts(localStorage.getItem("isLogin"), boardPage, boardRowSize));
        break;
      // case 'popular':
      //   data = (await getPopularPosts(localStorage.getItem("isLogin")));
      //   break;
      default:
        data = (await getPosts(localStorage.getItem("isLogin"), boardId, boardPage, boardRowSize));
        break;
    }
    setBoardRowsData(data); // 함수형 업데이트 사용
  };

  useEffect(() => {
    getBoardDataFromApi().then();
    console.log(boardRowsData);
  }, [boardId, boardName, lastPostId]);

  return (
    <div className="overflow-x-auto">
      <BoardInfo boardName={boardName} boardId={boardId} />
      <Outlet
        context={{
          boardRowsData,
          boardId,
          boardName,
          boardPage
        }} />
    </div>
  );
}

export default BoardCommonComp;
