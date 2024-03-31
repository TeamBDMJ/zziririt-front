import { AiFillThunderbolt } from 'react-icons/ai';
import React from 'react';
import { deleteComment } from '../../../../../apis/comments';

function CommentDiv({ comment, getPostDataFromApi }) {
  const onClickDeleteHandler = async (e) => {
    const res = await deleteComment(e.target.id);
    alert('게시글 삭제가 완료되었습니다!');
    getPostDataFromApi().then();
  };

  return (
    <div className="border">
      <div className="flex justify-between bg-gray-200 px-3 py-2">
        <div>{comment.memberNickname}</div>
        <div className="flex space-x-2">
          {/*{comment.permissionToUpdateStatus ? <div className="text-emerald-600 hover:text-emerald-800">수정</div> : ''}*/}
          {comment.permissionToDeleteStatus ? (
            <div
              onClick={onClickDeleteHandler}
              id={comment.commentId}
              className="text-emerald-600 hover:text-emerald-800"
            >
              삭제
            </div>
          ) : (
            ''
          )}
          <div className="flex">
            <AiFillThunderbolt className="pt-1" size="22" />
            <div>{comment.zziritCount}</div>
          </div>
        </div>
      </div>
      <div className="px-3 py-2">{comment.content}</div>
    </div>
  );
}

export default CommentDiv;
