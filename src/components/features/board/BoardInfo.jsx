import React, { useEffect, useState } from 'react';
import BoardCategoryTab from './tab/BoardCategoryTab';
import SearchJoin from './SearchJoin';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getAllPosts, getPosts } from '../../../apis/posts';
import { getChildBoards } from '../../../apis/boards';

function BoardInfo({ boardName, setCategoryId, categories, boardId }) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-4xl font-bold pl-4">{boardName}</h1>
      <div className="p-4">
        <div
          className={
            location.pathname === '/g/all' ? 'hidden' : 'flex justify-between'
          }
        >
          <BoardCategoryTab
            setCategoryId={setCategoryId}
            categories={categories}
          />
          <div></div>
          <div>
            <button
              onClick={() => {
                if (localStorage.getItem('isLogin')) {
                  navigate('./write');
                } else {
                  navigate('/login');
                }
              }}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-[#00b894] text-white"
            >
              글쓰기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardInfo;
