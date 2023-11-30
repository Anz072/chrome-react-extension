import "./summarize-button.styles.css";

const SummarizeButton = ({ caption, onClick, active }) => {
  const sx =
    active === caption
      ? "summarize-button summarize-button-active"
      : "summarize-button";
  return (
    <div className={`${sx}`} onClick={onClick}>
      {caption}
    </div>
  );
};

export default SummarizeButton;
