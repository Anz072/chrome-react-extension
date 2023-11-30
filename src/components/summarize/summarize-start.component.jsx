import './summarize-start.styles.css';

const SummarizeStartButton = () => {
    const handleStartClick = () =>{
        console.log('YEHAW')
    };

    return(
        <div className='summarize-start-button' onClick={handleStartClick}>
            Start
        </div>
    );
};

export default SummarizeStartButton;