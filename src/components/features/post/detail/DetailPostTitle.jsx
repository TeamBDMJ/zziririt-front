function DetailPostTitle({ postData }) {
  return (
    <div className="px-4">
      <div className="text-4xl bg-base-200 rounded-box px-3 lg:py-3">{postData.title}</div>
      <div className="flex justify-between">
        <div>{postData.createdAt}</div>
        <div>{postData.nickname}</div>
        <div>조회수: {postData.hit}</div>
        <div>찌리릿: {postData.zziritCount}</div>
      </div>
    </div>
  );
}

export default DetailPostTitle;
