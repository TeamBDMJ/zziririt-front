import React, { useEffect, useState } from 'react';
import BoardInfo from '../../components/features/board/BoardInfo';
import BoardRow from '../../components/features/board/BoardRow';
import Pagination from '../../components/features/post/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllPosts, getPosts } from '../../apis/posts';
import BoardCategoryTab from '../../components/features/board/tab/BoardCategoryTab';
import SearchJoin from '../../components/features/board/SearchJoin';

function BoardCommonComp() {
  const location = useLocation();
  const navigate = useNavigate();
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
    <div className="overflow-x-auto">
      <div>
        <h1 className="text-4xl pl-4">{boardName}</h1>
        <div className="p-4">
          <div className="flex justify-between">
            <BoardCategoryTab
              childBoards={['home', 'dummy1', 'dummy2', 'dummy3']}
            />
            <div>
              <button
                onClick={() => navigate('./write')}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-[#00b894] text-white"
              >
                글쓰기
              </button>
            </div>
          </div>
          <div className="mt-2 flex justify-between">
            <div></div>
            <SearchJoin />
          </div>
        </div>
      </div>
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
    </div>
  );
}

export default BoardCommonComp;
