import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createStreamerApply } from '../../apis/boards';

function ApplyStreamerBoard() {
  const navigate = useNavigate();
  const [applyUrl, setApplyUrl] = useState([]);
  const [applyBoardName, setBoardName] = useState([]);
  const [imgFile, setImgFile] = useState('');
  const imgRef = useRef();

  const onChangeApplyBoardNameHandler = (e) => {
    setBoardName(e.target.value);
  };

  const onChangeApplyUrlHandler = (e) => {
    setApplyUrl(e.target.value);
  };

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  const onSubmitHandler = async () => {
    const files = imgRef.current.files;

    if (files.length === 0) {
      return alert('인증 사진을 넣어주세요!');
    }

    // FormData 인스턴스 생성
    const formData = new FormData();

    // 사용자가 입력한 게시판 이름과 URL을 FormData에 추가
    formData.append(
      'request',
      JSON.stringify({
        applyUrl: applyUrl,
        applyBoardName: applyBoardName,
      })
    );

    // 파일들을 formData에 추가
    for (let i = 0; i < files.length; i++) {
      formData.append('multipartFile', files[i]);
    }

    // Axios를 사용하여 서버에 FormData 전송
    try {
      const response = await createStreamerApply(formData);
      // 성공적으로 제출되었을 때의 처리 로직 (예: 사용자에게 알림, 페이지 이동 등)
      if (
        response.response &&
        response.response.status &&
        (response.response.status === 500 ||
          response.response.status === 400 ||
          response.response.status === 403)
      ) {
        alert('스트리머 게시판 신청 실패! = 서버에러');
        return;
      }
      navigate('./success', {
        state: {
          applyUrl: applyUrl,
          applyBoardName: applyBoardName,
          file: imgFile,
        },
      });
    } catch (error) {
      console.error('스트리머 게시판 신청에 실패했습니다.', error);
      alert('스트리머 게시판 신청에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div key="applyStreamerBoard">
      <div>
        <div className="flex justify-between mb-10">
          <div className="text-4xl font-bold">스트리머 게시판 신청 폼</div>
        </div>
        <button
          className="btn"
          onClick={() => document.getElementById('my_modal_2').showModal()}
        >
          신청 설명란
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-3xl mb-4">
              스트리머 게시판 신청하기
            </h3>
            <div>스트리머는 자신의 게시판을 신청할 수 있습니다.</div>
            <div
              key="streamerBoardWrapper"
              className="p-4 min-w-max border-2 mt-4"
            >
              <div className="p-2">
                <div className="font-bold text-lg">신청하고자 하는 URL</div>
                <div className="pl-4">
                  스트리머 자신의 게시판을 신청할 수 있습니다.
                </div>
                <div className="pl-4">예시:</div>
                <div className="pl-4">
                  <span className="font-bold pl-4">
                    https://zziririt.kr/s/[개별URL]
                  </span>
                </div>
                <div className="pl-4">
                  게시판 신청이 승인될 경우 찌리릿 주소입니다.
                </div>
                <div className="pl-4">
                  고객센터를 통해 URL 변경 신청이 가능합니다.
                </div>
              </div>
              <div className="p-2">
                <div className="font-bold text-lg">게시판 이름</div>
                <div className="pl-4">설정한 이름으로 게시판이 생성되며,</div>
                <div className="pl-4">
                  한글로 하셔야 시청자들이 게시판을 찾기 쉽습니다.
                </div>
              </div>
              <div className="p-2">
                <div className="font-bold text-lg">내 채널 스크린샷</div>
                <div className="pl-4">
                  치지직 > 내 채널의 화면 전체 스크린샷을 첨부해 주세요.
                </div>
                <img
                  className="ml-5"
                  src="/applyStreamerSample.png"
                  alt="스트리머 인증 사진"
                />
              </div>
              <div className="p-2">
                <div className="font-bold text-lg">게시판 검수 진행 일정</div>
                <div className="pl-4">
                  게시판은 운영자에 의해 생성되며 신청 후 영업일 기준 수 일
                  이내에 게시판이 생성됩니다.
                </div>
                <div className="pl-4">
                  또한, 게시판 생성에 대한 확인 메일이 발송됩니다.
                </div>
              </div>
            </div>
            <p className="py-4 text-right">
              {' '}
              ESC를 누르거나 창 바깥을 누르시면 없어집니다! :)
            </p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        <div className="py-6 flex justify-center">
          <div key="form" className="mb-4">
            <label className="form-control w-full max-w-sm">
              <div className="label">
                <span className="label-text font-bold">게시판 이름</span>
              </div>
              <input
                key="applyBoardName"
                type="text"
                onChange={onChangeApplyBoardNameHandler}
                placeholder="신청하고자 하는 게시판 이름"
                className="input input-bordered w-full max-w-sm"
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
                onChange={onChangeApplyUrlHandler}
                placeholder="원하는 게시판 url 영어 대소문자만 가능합니다."
                className="input input-bordered w-full max-w-sm"
              />
            </label>
            <label className="form-control w-full max-w-sm">
              <div className="label">
                <span className="label-text font-bold">
                  치지직 > 내 채널 스크린샷
                </span>
              </div>
              <input
                type="file"
                onChange={saveImgFile}
                accept="image/*"
                ref={imgRef}
                className="file-input file-input-bordered w-full max-w-sm"
              />
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
                  className="btn btn-outline btn-accent mr-2"
                  onClick={() => navigate(-1)}
                >
                  뒤로가기
                </button>
                <button
                  className="btn btn-outline btn-neutral"
                  onClick={onSubmitHandler}
                >
                  제출하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyStreamerBoard;
