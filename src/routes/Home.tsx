import Logo from "../images/logo.svg";
import Search from "../components/Search";
import { CSSProperties } from "react";

const homeStyles: CSSProperties = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  padding: "20% 1rem 1rem",
};

export default function Home() {
  return (
    <div style={homeStyles}>
      <img src={Logo} alt="PeachFlix" style={{ marginBottom: "1rem" }} />
      <Search />
    </div>
  );
}
