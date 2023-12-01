import "./summarize-start.styles.css";

const SummarizeStartButton = ({ handleStartClick }) => {
  return (
    <div className="summarize-start-button" onClick={handleStartClick}>
      Start
    </div>
  );
};

export default SummarizeStartButton;
