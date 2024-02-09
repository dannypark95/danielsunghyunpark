import React, { useEffect, useRef } from "react";
import { initializeEditor } from "./editorSetup"; // Adjust the import path as necessary

interface ContentEditorProps {
  setContent: React.Dispatch<React.SetStateAction<any>>; // Ideally, define a proper type instead of any
}

const ContentEditor: React.FC<ContentEditorProps> = ({ setContent }) => {
  const editorContainerRef = useRef<HTMLDivElement>(null);
  const editorInstanceRef = useRef<any>(null); // Use any here or a more specific type if available

  useEffect(() => {
    if (editorContainerRef.current) {
      // Initialize Editor.js and keep the instance reference
      editorInstanceRef.current = initializeEditor(
        editorContainerRef.current.id,
        (api: any, event: any) => {
          // Adjust these types based on the actual API provided by Editor.js
          api.saver
            .save()
            .then((outputData: any) => {
              setContent(outputData);
            })
            .catch((error: any) => {
              console.error("Saving failed: ", error);
            });
        }
      );
    }

    return () => {
      // Safely attempt to call .destroy() if the editor instance exists
      if (
        editorInstanceRef.current &&
        typeof editorInstanceRef.current.destroy === "function"
      ) {
        try {
          editorInstanceRef.current.destroy();
        } catch (error) {
          console.error("Error destroying editor instance:", error);
        }
      }
    };
  });

  return <div ref={editorContainerRef} id="editorjs"></div>;
};

export default ContentEditor;
