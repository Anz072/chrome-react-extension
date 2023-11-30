import "./footer-button.styles.css";

import { RxLightningBolt } from "react-icons/rx";
import { TbHome } from "react-icons/tb";
import { LuSettings2 } from "react-icons/lu";
import { useContext } from "react";
import { RouteContext } from "../../context/RouteContext.component";

const iconType = {
  settings: "Settings",
  summarize: "Summarize",
  home: "Home",
};

let obj = <TbHome color="white" className="footer-icon" />;
let color = "#FFF";

const FooterButton = ({ caption }) => {
  const { page, setPage } = useContext(RouteContext);

  const clickHandler = (caption) => {
    setPage(caption);
  };

  switch (caption) {
    case iconType.settings:
      color = page === iconType.settings && "#FF5B36";
      
      obj = (
        <LuSettings2
          color={color}
          className="footer-icon"
        />
      );

      break;
    case iconType.summarize:
      color = page === iconType.summarize && "#FF5B36";
      obj = (
        <RxLightningBolt
          color={color}
          className="footer-icon"
        />
      );
      break;
    case iconType.home:
      color = page === iconType.home && "#FF5B36";
      obj = (
        <TbHome
          color={color}
          className="footer-icon"
        />
      );
      break;
    default:
      obj = <TbHome color="white" className="footer-icon" />;
  }

  return (
    <div className="footer-button" onClick={() => clickHandler(caption)}>
      {obj}
      <p className="footer-text" style={{color:color}}>{caption}</p>
    </div>
  );
};

export default FooterButton;
