import SummarizeButton from './summarize-button.component';
import './summarize-generated.styles.css';

const SummaryGenerated = ({active,action,summary}) => {
    return (
        <div className="content-container">
        <div className="content-container-title">
          <span>Summarized by:</span>
          <SummarizeButton
            caption={active}
            active={active}
            onClick={()=>{}}
          />
        </div>
        <div className="content-box">{summary}</div>
      </div>
    );
}

export default SummaryGenerated;