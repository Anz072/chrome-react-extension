import FooterButton from "./footer-button.component";

const ExtensionFooter = () => {
  return (
    <footer className="footer">
        <FooterButton  caption={"Summarize"}/>
        <FooterButton caption={"Home"}/>
        <FooterButton caption={"Settings"}/>
    </footer>
  );
};

export default ExtensionFooter;
