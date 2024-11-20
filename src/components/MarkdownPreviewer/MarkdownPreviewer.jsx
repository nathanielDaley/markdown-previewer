import "./MarkdownPreviewer.css";
import ReactMarkdown from "react-markdown";

function MarkdownPreviewer({ markdownText, onUpdateMarkdownText }) {
  return (
    <div className="markdown-previewer">
      <h1>Markdown Previewer</h1>
      <div className="markdown-previewer__editor-title">
        <h2 className="markdown-previewer__editor-title-text">Editor</h2>
      </div>
      <textarea
        className="markdown-previewer__markdownEditor"
        name="markdownEditor"
        id="editor"
        value={markdownText}
        onChange={onUpdateMarkdownText}
      ></textarea>
      <div className="markdown-previewer__preview-title">
        <h2 className="markdown-previewer__preview-title-text">Preview</h2>
      </div>
      <div className="markdown-previewer__preview">
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </div>
    </div>
  );
}

export default MarkdownPreviewer;
