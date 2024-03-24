import BoardRow from './BoardRow';
import Pagination from '../post/Pagination';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BoardCategoryTab from './tab/BoardCategoryTab';
import SearchJoin from './SearchJoin';
import { useNavigate } from 'react-router-dom';

function BoardInfo({ boardTitle, boardId }) {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-4xl pl-4">Board 제목 : {boardTitle}</h1>
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
  );
}

export default BoardInfo;
