import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PostRow from './features/post/PostRow';

export default function OldBoard({ data }) {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(30); // 페이지당 게시글 수
  const navigate = useNavigate();
  const boardContent = data && data.content && data.content.content;
  // const fetchPosts = async () => {
  //   try {
  //     const response = await axios.get('/api/v1/boards/1/posts');
  //     setPosts(response.data); // API 응답 구조에 따라 조정이 필요할 수 있습니다.
  //   } catch (error) {
  //     console.error('게시글을 불러오는데 실패했습니다.', error);
  //   }
  // };
  // useEffect(() => {
  //   fetchPosts().then((r) => console.log(r));
  // }, []);

  return (
    <board>
      <div className="space-y-4">
        <div className="grid grid-rows-2 bg-[#1a1a1a] p-4 rounded">
          <div className="flex justify-between">
            <div className="flex space-x-2">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#00b894] text-white">
                전체
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-white">
                인기
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-white">
                TOP
              </button>
            </div>
            <div>
              <button
                onClick={() => navigate('/createPost')}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-[#00b894] text-white"
              >
                글쓰기
              </button>
            </div>
          </div>
          <div className="mt-2 flex justify-between">
            <div></div>
            <div className="flex justify-between">
              <select
                defaultValue="title-content"
                className="mr-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                <option value="title-content">제목+내용</option>
                <option value="author">작성자</option>
              </select>
              <input
                className="mx-1 w-min flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#2d2d2d] text-white"
                placeholder="Search"
                type="search"
              />
              <button className="ml-1 bg-[#2d2d2d] inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-white">
                검색
              </button>
            </div>
          </div>
          <div>
            <div className="mt-4 grid grid-cols-10 gap-2 bg-[#2d2d2d] rounded text-white font-bold p-2">
              <div className="col-span-1 p-2">찌릿</div>
              <div className="col-span-1 p-2">카테고리</div>
              <div className="col-span-5 p-2">제목</div>
              <div className="col-span-1 p-2">닉네임</div>
              <div className="col-span-1 p-2">작성일</div>
              <div className="col-span-1 p-2">조회수</div>
            </div>
            {boardContent &&
              boardContent.map((data, index) => (
                <PostRow data={data} index={index} />
              ))}
          </div>
        </div>
      </div>
    </board>
  );
}
