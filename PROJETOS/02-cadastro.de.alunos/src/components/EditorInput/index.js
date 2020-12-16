import { Editor } from "react-draft-wysiwyg";
import {
  EditorState,
  ContentState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function EditorInput({ editorState, setEditorState, text }) {
  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };
  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={onEditorStateChange}
      wrapperStyle={{ marginBottom: "24px" }}
      toolbarStyle={{
        border: "1px solid #fff",
        borderBottomLeftRadius: "0px",
        borderBottomRightRadius: "0px",
        borderTopLeftRadius: "6px",
        borderTopRightRadius: "6px",
        boxSizing: "border-box",
        marginBottom: "0",
      }}
      editorStyle={{
        border: "1px solid #fff",
        borderBottomLeftRadius: "6px",
        borderBottomRightRadius: "6px",
        padding: "5px 10px 10px",
      }}
      placeholder={text || ""}
    />
  );
}

export const formatEditorOutput = (data) => {
  return draftToHtml(convertToRaw(data.getCurrentContent()));
};

export const formatEditorInput = (data) => {
  const blocksFromHTML = convertFromHTML(data);
  const state = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );
  return EditorState.createWithContent(state);
};
