import Logo from "../images/logo.svg";
import Search from "../components/Search";

export default function Home() {
  return (
    <div>
      <img src={Logo} alt="PeachFlix" />
      <Search onChange={() => {}} />
    </div>
  );
}
