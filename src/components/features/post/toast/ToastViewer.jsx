import React from 'react';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

export default function ToastViewer({ contents }) {
  console.log('string:', contents);
  return <Viewer initialValue={contents || ''} />;
}
