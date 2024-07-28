import Logo from "../images/logo.svg";
import NavLinkButton from "./NavLinkButton";
import Search from "./Search";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <img src={Logo} alt="Peachflix." height={40} />
      <div className="nav-section">
        <NavLinkButton to="/">Movies</NavLinkButton>
        <NavLinkButton to="/favorites">Favorites</NavLinkButton>
        <Search />
      </div>
    </nav>
  );
}
