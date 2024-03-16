import { useState } from 'react';
import axios from 'axios';

export default function AsideLeft({ setData }) {
  const onClickAllPosts = () => {
    axios.get('/api/v1/boards/1/posts').then((response) => {
      setData(response.data); // 받아온 데이터로 상태 업데이트
      console.log(response.data);
    });
  };
  return (
    <aside className="col-span-2">
      <div className="sticky top-4 space-y-4">
        <div className="bg-[#1a1a1a] p-4 rounded">
          <h2 className="text-white text-lg">카테고리1</h2>
          <ul className="mt-2 space-y-2">
            <li onClick={onClickAllPosts} className="text-white">
              전체 글 보기
            </li>
            <li className="text-white">스트리머 게시판</li>
            <li className="text-white">자유 게시판</li>
            <li className="text-white">방송홍보</li>
            <li className="text-white">공지사항</li>
          </ul>
        </div>
        <div className="bg-[#1a1a1a] p-4 rounded">
          <h2 className="text-white text-lg">카테고리2</h2>
          <ul className="mt-2 space-y-2">
            <li className="text-white">title1</li>
            <li className="text-white">title2</li>
            <li className="text-white">title3</li>
            <li className="text-white">title4</li>
            <li className="text-white">title5</li>
          </ul>
        </div>
        <div className="bg-[#1a1a1a] p-4 rounded">
          <h2 className="text-white text-lg">카테고리 3</h2>
          <ul className="mt-2 space-y-2">
            <li className="text-white">title1</li>
            <li className="text-white">title2</li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
