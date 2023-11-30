import "./summarize.styles.css";
import SummarizeButton from "./summarize-button.component";
import { useState } from "react";

const TYPES = ["Generic Summary", "Novelty", "Factual", "Entity", "Takeaways"];

const Summarize = () => {
  const [activeButton, setActiveButton] = useState("Generic Summary");

  const buttonClickHandler = (e) => {
    setActiveButton(e.target.innerText);
  };

  return (
    <div className="summarize-main">
      <h4 className="remove-ev">Summarize by:</h4>
      <div className="summarize-choices">
        {TYPES.map((item) => (
          <SummarizeButton
            caption={item}
            active={activeButton}
            onClick={buttonClickHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Summarize;
