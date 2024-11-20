import { useEffect, useState } from "react";
import "./App.css";
import MarkdownPreviewer from "./components/MarkdownPreviewer/MarkdownPreviewer";
import Footer from "./components/Footer/Footer";
import defaultMarkdown from "./utils/constants";

function App() {
  const [markdownText, setMarkdownText] = useState("");

  const handleUpdateMarkdownText = (event) => {
    setMarkdownText(event.target.value);
  };

  useEffect(() => {
    setMarkdownText(defaultMarkdown);
  }, []);

  return (
    <div className="app">
      <div className="app__content">
        <MarkdownPreviewer
          markdownText={markdownText}
          onUpdateMarkdownText={handleUpdateMarkdownText}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
