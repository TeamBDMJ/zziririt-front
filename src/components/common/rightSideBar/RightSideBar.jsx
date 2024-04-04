import Ad from './Ad';
import { getPopularPosts } from '../../../apis/zzirits';
import React, { useEffect, useState } from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function RightSideBar() {
  const navigate = useNavigate();
  const [popularPostsData, setPopularPostsData] = useState();
  const getPopularPostsData = async () => {
    let data = await getPopularPosts();
    setPopularPostsData(data.content);
  };
  const onClickHandler = async (e) => {
    navigate(`/g/all/${e.target.id}`);
  };

  useEffect(() => {
    getPopularPostsData();
  }, []);
  return (
    <div key="RightSideBar" className="sticky top-4 space-y-4">
      <div className="p-2 rounded">
        <div className="mt-2 space-y-2">
          <div className="flex justify-between mb-4">
            <div className="pl-3 text-2xl">핫한 게시글</div>
            <div className="pt-2">최근 24시간 기준</div>
          </div>
          {popularPostsData &&
            popularPostsData.map((postData, index) => (
              <div
                onClick={onClickHandler}
                className="flex p-2 hover:bg-primary/90 rounded"
                id={postData.postId}
              >
                [<AiFillThunderbolt className="pt-1 size-5" />
                <span className="font-bold">{postData.zziritCount} </span>]{' '}
                {postData.postTitle}
              </div>
            ))}
        </div>
      </div>
      <Ad />
    </div>
  );
}

export default RightSideBar;
