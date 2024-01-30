import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";

interface ContentEditorProps {
  setContent: React.Dispatch<React.SetStateAction<{}>>;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ setContent }) => {
  const editorRef = useRef<EditorJS | null>(null);
  const editorContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editorRef.current && editorContainerRef.current) {
      editorRef.current = new EditorJS({
        holder: editorContainerRef.current,
        tools: {
          header: Header,
          list: List,
        },
        onChange: async () => {
          //   const savedData = await editorRef.current?.save();
          //   setContent(savedData); // Update the content state in the parent component
        },
      });
    }

    return () => {
      if (editorRef.current && "destroy" in editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, [setContent]);

  return <div ref={editorContainerRef} id="editorjs"></div>;
};

export default ContentEditor;
