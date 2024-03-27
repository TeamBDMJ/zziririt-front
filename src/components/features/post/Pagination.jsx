import { useState } from 'react';

function Pagination({
  pageable,
  page,
  totalPages,
  totalPosts,
  limit,
  setPage,
}) {
  // const numPages = Math.ceil(totalPosts / limit);
  // const [currPage, setCurrPage] = useState(page);
  // let firstNum = currPage - (currPage % 5) + 1;
  // let lastNum = currPage - (currPage % 5) + 5;

  // const maximumPages = () => {
  //   if (totalPages > 10) {
  //     return 10;
  //   } else {
  //     return totalPages;
  //   }
  // };

  return (
    <div className="join">
      <button className="join-item btn btn-sm">«</button>
      <button className="join-item btn btn-sm">1</button>
      <button className="join-item btn btn-sm btn-active">2</button>
      <button className="join-item btn btn-sm">3</button>
      <button className="join-item btn btn-sm">4</button>
      <button className="join-item btn btn-sm">»</button>
    </div>
  );
}

export default Pagination;
