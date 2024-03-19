import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

export default function ToastEditor(props) {
  const { content, editorRef } = props;

  // const onChange = () => {
  //   const data = editorRef.current.getInstance().getHTML();
  //   console.log(data);
  // };


  const toolbarItems = [
    // 툴바 옵션 설정
    ['heading', 'bold', 'italic', 'strike'],
    ['hr', 'quote'],
    ['ul', 'ol', 'task', 'indent', 'outdent'],
    ['image'],
    ['code', 'codeblock'],
    ['scrollSync'],
  ];
  return (
    <div className="edit_wrap">
      <Editor
        placeholder="내용을 입력해주세요."
        initialValue={content || ' '}
        ref={editorRef} // DOM 선택용 useRef
        previewStyle={window.innerWidth > 1000 ? 'vertical' : 'tab'} // 미리보기 스타일 지정
        height="600px" // 에디터 창 높이
        initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown) wysiwyg & markdown
        theme={''} // '' & 'dark'
        toolbarItems={toolbarItems}
        useCommandShortcut={true}
        plugins={[colorSyntax]}
        language="ko-KR"
        // onChange={onChange}
      />
    </div>
  );
}