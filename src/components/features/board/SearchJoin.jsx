import { getAllPosts, searchPost } from '../../../apis/posts';
import { useEffect, useState } from 'react';

function SearchJoin({ boardId, setBoardRowsData, setStatus }) {
  const [searchType, setSearchType] = useState('TITLECONT');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState('');

  const onChangeInputHandler = (e) => {
    setSearchTerm(e.target.value);
  };
  const onSelectHandler = (e) => {
    switch (e.target.value) {
      case '제목+내용':
        setSearchType('TITLECONT');
        break;
      case '작성자 닉네임':
        setSearchType('NICKNAME');
        break;
    }
  };

  const getBoardSearchDataFromApi = async () => {
    let data = undefined;
    data = await searchPost(searchType, searchTerm);
    setBoardRowsData(data); // 함수형 업데이트 사용
  };

  useEffect(() => {
    // getBoardSearchDataFromApi();
  }, []);

  return (
    <div className="join">
      <div>
        <div>
          <input
            onChange={onChangeInputHandler}
            className="input input-bordered join-item input-sm"
            placeholder="Search"
          />
        </div>
      </div>
      <select
        onChange={onSelectHandler}
        className="select select-bordered join-item select-sm"
      >
        <option selected>제목+내용</option>
        <option>작성자 닉네임</option>
      </select>
      <div className="indicator">
        <button
          onClick={getBoardSearchDataFromApi}
          className="btn join-item btn-sm"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchJoin;
