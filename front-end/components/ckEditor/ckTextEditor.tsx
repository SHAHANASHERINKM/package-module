// ckTextEditor.tsx
/*
import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface TextEditorProps {
  value: string;
  onChange: (data: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ value, onChange }) => {
  const [editorData, setEditorData] = useState(value);

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '6px' }}>
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
       //data={`<p><span style="color: #999;"><em>Enter your title here...</em></span></p>
       // <p><span style="color: #999;"><em>Write your message here...</em></span></p>`}
        config={{
          placeholder: "Write your success message here...",
          
          
        }}
        onChange={(_, editor: any) => {
          const data = editor.getData();
          setEditorData(data);
          onChange(data);
        }}
        onReady={(editor: any) => {
          console.log('Editor is ready!', editor);
        }}
      />
    </div>
  );
};

export default TextEditor;
*/

"use client";

import { useState, useEffect } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
interface TextEditorProps {
  value: string;
  onChange: (data: string) => void;
}

const Editor: React.FC<TextEditorProps> = ({ value, onChange }) => {
  const [editorData, setEditorData] = useState(value);
  //const [data, setData] = useState<string>("");
  const [editorReady, setEditorReady] = useState<boolean>(false);

  useEffect(() => {
    setEditorReady(true); // Ensures editor is initialized after mount
  }, []);

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '6px' }}>
      {editorReady && (
        <CKEditor
          editor={ClassicEditor}
          data={editorData}
          config={{
            placeholder: "Write your success message here...",
            licenseKey: "",
            ckfinder: {
              uploadUrl: "http://localhost:3000/package/success-images", 
            },
            

            
          }}
          onChange={(_, editor: any) => {
            const data = editor.getData();
            setEditorData(data);
            onChange(data);
          }}
          onReady={(editor: any) => {
            console.log('Editor is ready!', editor);
          }}
        />
      )}
    </div>
  );
};
export default Editor;