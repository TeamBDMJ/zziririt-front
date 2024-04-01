import BoardRow from '../../components/features/board/BoardRow';
import Pagination from '../../components/features/post/Pagination';
import { useOutletContext } from 'react-router-dom';
import React from 'react';
import SearchJoin from '../../components/features/board/SearchJoin';

function BoardTable() {
  const {
    boardRowsData,
    boardId,
    categoryId,
    boardName,
    searchType,
    setSearchType,
    searchTerm,
    setSearchTerm,
    boardPage,
    setBoardPage,
    boardSize,
    setBoardSize,
    setBoardRowsData,
  } = useOutletContext();

  const boardRowDataContent = boardRowsData && boardRowsData.content;
  const boardRowContent = boardRowDataContent && boardRowDataContent.content;

  // // Paging
  // const [page, setPage] = useState(1);
  // const [pageSize, setPageSize] = useState(30);
  // const [totalPages, setTotalPages] = useState(boardRowDataContent && boardRowDataContent.totalPages);
  // const [totalCnt, setTotalCnt] = useState(0);
  //
  // // 페이징 보여주기
  // const changePage = (page) => {
  //   setPage(page);
  // };

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
          {boardRowContent &&
            boardRowContent.map((postData, index) => (
              <BoardRow
                postData={postData}
                index={index}
                boardId={boardId}
                boardGName={boardName}
              />
            ))}
        </tbody>
      </table>
      <div className="flex justify-center">
        {/*<Pagination*/}
        {/*  pageable={boardRowDataContent && boardRowDataContent.pageable}*/}
        {/*  totalPages={boardRowDataContent && boardRowDataContent.totalPages}*/}
        {/*/>*/}
      </div>
      <div className="mt-2 flex justify-center">
        <div></div>
        <SearchJoin
          boardId={boardId}
          setBoardRowsData={setBoardRowsData}
          categoryId={categoryId}
          searchType={searchType}
          setSearchType={setSearchType}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          boardPage={boardPage}
          setBoardPage={setBoardPage}
          boardSize={boardSize}
          setBoardSize={setBoardSize}
        />
      </div>
    </div>
  );
}

export default BoardTable;
