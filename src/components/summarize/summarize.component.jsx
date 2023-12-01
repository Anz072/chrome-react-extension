import "./summarize.styles.css";
import SummarizeButton from "./summarize-button.component";
import { useEffect, useState } from "react";
import SummarizeStartButton from "./summarize-start.component";
import SummaryGenerated from "./summarize-generated.component";
import io from "socket.io-client";

const TYPES = ["Generic Summary", "Novelty", "Factual", "Entity", "Takeaways"];

const Summarize = () => {
  const [activeButton, setActiveButton] = useState("Generic Summary");
  const [summary, setSummary] = useState("");
  const [started, setStarted] = useState(false);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    console.log("ATTEMPT TO CONNECT");
    const newSocket  = io("http://localhost:3000");

    newSocket.on("connect", (socket) => {
      console.log("Connected to server");
    });
    newSocket.on("serverResponse", (data) => {
      setSummary((prevStatus) => [...prevStatus, data]);
    });
    setSocket(newSocket);
    // Cleanup when the component unmounts   
    return () => {
      newSocket.disconnect();
    };
  }, []);

  const buttonClickHandler = (e) => {
    setActiveButton(e.target.innerText);
  };

  const handleStartClick = () => {
    console.log("clientMessage STUFF");
    setStarted(true);
    setSummary("");
    console.log(socket)
    if (socket && socket.connected) {
      const messageToServer = "Hello, server!";
      socket.emit("clientMessage", messageToServer);
    } else {
      console.log(
        "Not connected to the server. Click 'Connect to Server' first."
      );
    }
  };

  return (
    <div className="summarize-main">
      <h4 className="remove-ev">Summarize by:</h4>
      <div className="summarize-choices">
        {TYPES.map((item) => (
          <SummarizeButton
            key={item}
            caption={item}
            active={activeButton}
            onClick={buttonClickHandler}
          />
        ))}
      </div>
      {/* {started ? ( */}
      <SummaryGenerated active={activeButton} summary={summary} />
      {/* ) : ( */}
      <div className="content-container-row">
        <SummarizeStartButton handleStartClick={handleStartClick} />
      </div>
      {/* )} */}
    </div>
  );
};

export default Summarize;
