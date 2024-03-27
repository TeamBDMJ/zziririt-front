function PostSelect() {
  return (
    <div className="mr-2">
      <select className="select select-bordered max-w-xs" disabled>
        <option selected>개발중</option>
        <option>잡담</option>
        <option>공유</option>
      </select>
    </div>
  );
}

export default PostSelect;
