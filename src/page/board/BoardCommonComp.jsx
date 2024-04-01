import React, { useEffect, useState } from 'react';
import BoardInfo from '../../components/features/board/BoardInfo';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getPostByCategoryId, getPosts, searchPost } from '../../apis/posts';
import { getBoardDataByBoardUrl } from '../../apis/boards';

function BoardCommonComp() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const boardUrl = params.boardUrl;
  const categoryIdParam = params.categotyId;

  const [boardId, setBoardId] = useState(0);
  const [boardName, setBoardName] = useState('');
  const [categories, setCategories] = useState('');
  const [categoryId, setCategoryId] = useState(categoryIdParam);

  const [boardRowsData, setBoardRowsData] = useState({});

  const [searchType, setSearchType] = useState('TITLECONT'); // TITLECONT, NICKNAME;
  const [searchTerm, setSearchTerm] = useState('');
  const [boardPage, setBoardPage] = useState(0);
  const [boardSize, setBoardSize] = useState(30);

  const getBoardDataFromApi = async () => {
    let boardData = await getBoardDataByBoardUrl(boardUrl);

    setBoardId(boardData.content.boardId);
    setBoardName(boardData.content.boardName);
    setCategories(boardData.content.categoryList);
  };

  const getBoardRowDataFromApi = async () => {
    let data = await getPosts(
      localStorage.getItem('isLogin'),
      boardId,
      boardPage,
      boardSize
    );

    setBoardRowsData(data);
  };

  const getBoardRowDataFromSearchPostApi = async () => {
    let data = await searchPost(
      boardId,
      searchType,
      searchTerm,
      boardPage,
      boardSize,
      categoryId
    );

    setBoardRowsData(data);
  };

  const getBoardRowDataFromPostCategoryApi = async () => {
    let data = await getPostByCategoryId(
      boardId,
      boardPage,
      boardSize,
      categoryId
    );

    setBoardRowsData(data);
  };

  //주소의 boardUrl 부분이 변경되면 board 정보를 받아옵니다.
  useEffect(() => {
    getBoardDataFromApi().then();
  }, [boardUrl]);

  //boardId가 변경되면 BoardRow를 받아옵니다.
  useEffect(() => {
    if (boardId !== 0) {
      getBoardRowDataFromApi().then();
    }
  }, [boardId]);

  //categoryId가 변경되면 BoardRow를 받아옵니다.
  useEffect(() => {
    if (categoryId === 0) {
      getBoardRowDataFromApi().then();
    } else {
      getBoardRowDataFromPostCategoryApi().then();
    }
  }, [categoryId]);

  return (
    <div className="overflow-x-auto">
      <BoardInfo
        setCategoryId={setCategoryId}
        boardName={boardName}
        categories={categories}
        boardId={boardId}
      />
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

export default BoardCommonComp;
