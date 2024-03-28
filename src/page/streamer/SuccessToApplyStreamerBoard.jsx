import { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createStreamerApply } from '../../apis/boards';

function SuccessToApplyStreamerBoard() {
  const navigate = useNavigate();
  const location = useLocation();
  const applyUrl = location.state.applyUrl && location.state.applyUrl;
  const applyBoardName =
    location.state.applyBoardName && location.state.applyBoardName;
  const imgFile = location.state.file && location.state.file;

  return (
    <div key="applyStreamerBoard">
      <div>
        <div className="flex justify-between mb-10">
          <div className="text-4xl font-bold">
            스트리머 게시판 신청 정보 확인란
          </div>
        </div>
        <div role="alert" className="alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>아래 정보는 내 정보에서 추후에 확인하실 수 있습니다.</span>
        </div>
        <div className="py-6 flex justify-center">
          <div key="form" className="mb-4">
            <label className="form-control w-full min-w-96">
              <div className="label">
                <span className="label-text font-bold">게시판 이름</span>
              </div>
              <input
                key="applyBoardName"
                type="text"
                value={applyBoardName}
                placeholder="신청하고자 하는 게시판 이름"
                className="input input-bordered w-full max-w-sm"
                readOnly
              />
            </label>
            <label className="form-control w-full max-w-sm">
              <div className="label">
                <span className="label-text font-bold">
                  신청하고자 하는 url
                </span>
              </div>
              <input
                key="applyUrl"
                type="text"
                value={applyUrl}
                placeholder="원하는 게시판 url 영어 대소문자만 가능합니다."
                className="input input-bordered w-full max-w-sm"
                readOnly
              />
            </label>
            <label className="form-control w-full max-w-sm">
              <div className="label">
                <span className="label-text font-bold">
                  치지직 > 내 채널 스크린샷
                </span>
              </div>
              <img
                className="p-4 w-full"
                src={imgFile ? imgFile : `/default-preview.jpg`}
                alt="게시판 인증 이미지 미리보기"
              />
            </label>

            <div className="flex justify-between mt-4">
              <div></div>
              <div>
                <button
                  className="btn btn-outline btn-info pr-4"
                  onClick={() => navigate('/streamer')}
                >
                  뒤로가기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessToApplyStreamerBoard;
