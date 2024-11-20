import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://nathanieldaley.github.io/markdown-previewer/"
        className="footer__link"
      >
        <span
          data-content="Developed by Nathaniel Daley"
          aria-hidden="true"
          className="footer__link-transition"
        ></span>
        Developed by Nathaniel Daley
      </a>
      <p className="footer__date">{new Date().getFullYear()}</p>
    </footer>
  );
}
