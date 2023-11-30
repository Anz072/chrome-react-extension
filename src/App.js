import { ReactComponent as MainLogo } from "./main-logo.svg";
import "./App.css";
import ExtensionFooter from "./components/footer/footer.component";
import Home from "./components/home/home.component";
import { useContext } from "react";
import { RouteContext } from "./context/RouteContext.component";
import Settings from "./components/settings/settings.component";
import Summarize from "./components/summarize/summarize.component";

function App() {
  const { page } = useContext(RouteContext);
      let renderComponent = <Home />;


  switch (page) {
    case "Home":
      renderComponent = <Home/>
      break;
    case "Settings":
      renderComponent = <Settings/>
      break;
    case "Summarize":
      renderComponent = <Summarize/>
      break;
    default:
  }

  return (
    <div className="App">
      <header className="header">
        <MainLogo />
      </header>
      {renderComponent}
      <ExtensionFooter />
    </div>
  );
}

export default App;
