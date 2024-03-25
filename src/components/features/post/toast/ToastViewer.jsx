import React, { useEffect } from 'react';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';

export default function ToastViewer({ content }) {

  const contentDetail = content

  useEffect(() => {
    const viewer = new Viewer({
      el: document.querySelector('#viewer'),
      initialValue: contentDetail,
    });
  }, [contentDetail]);

  return (
    <div id="viewer">
    </div>
  );
}
