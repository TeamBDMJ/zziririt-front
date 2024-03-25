import BoardRow from '../../components/features/board/BoardRow';
import Pagination from '../../components/features/post/Pagination';
import { useOutletContext } from 'react-router-dom';

function BoardTable() {
  const { boardRowsData, boardId, boardName, boardPage }  = useOutletContext();
  console.log("boardRowsData")
  console.log(boardRowsData)

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
            <BoardRow postData={postData} index={index} boardId={boardId} boardGName={boardName} />
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
