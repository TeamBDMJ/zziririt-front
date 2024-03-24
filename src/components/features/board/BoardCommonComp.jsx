import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import BoardTable from '../../../page/board/BoardTable';
import BoardInfo from './BoardInfo';
import { getAllPosts } from '../../../apis/posts';

function BoardCommonComp() {
  const chatLogProps  = useOutletContext();
  console.log("props",chatLogProps)
  return (
    <div className="overflow-x-auto">
      <BoardInfo />
      <BoardTable />
    </div>
  );
}

export default BoardCommonComp;
