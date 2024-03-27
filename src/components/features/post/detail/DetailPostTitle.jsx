function DetailPostTitle({ postData }) {
  const timestamp = new Date(postData.createdAt).getTime();

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  return (
    <div className="px-1">
      <div className="text-3xl bg-base-200 rounded-box px-3 lg:py-3">
        {postData.title}
      </div>
      <div className="flex justify-between px-2">
        <div>{formatTimestamp(timestamp)}</div>
        <div>{postData.nickname}</div>
        <div>조회수: {postData.hit}</div>
        <div>찌리릿: {postData.zziritCount}</div>
      </div>
    </div>
  );
}

export default DetailPostTitle;
