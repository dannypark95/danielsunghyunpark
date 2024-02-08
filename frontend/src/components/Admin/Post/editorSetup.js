import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import SimpleImage from "@editorjs/simple-image";

export function initializeEditor(holderId, onChangeCallback) {
  return new EditorJS({
    holder: holderId,
    tools: {
      header: {
        class: Header,
        shortcut: "CMD+SHIFT+H",
      },
      list: List,
      image: SimpleImage,
      // Add more tools as needed
    },
    onChange: onChangeCallback,
  });
}
