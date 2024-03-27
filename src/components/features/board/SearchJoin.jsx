function SearchJoin() {
  return (
    <div className="join">
      <div>
        <div>
          <input
            className="input input-bordered join-item input-sm"
            placeholder="Search"
          />
        </div>
      </div>
      <select className="select select-bordered join-item select-sm">
        <option selected>제목+내용</option>
        <option>작성자 닉네임</option>
      </select>
      <div className="indicator">
        <button className="btn join-item btn-sm">Search</button>
      </div>
    </div>
  );
}

export default SearchJoin;
