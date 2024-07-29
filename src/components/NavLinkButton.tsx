import { NavLink, NavLinkProps } from "react-router-dom";
import "./NavLinkButton.css";

type Props = NavLinkProps;

export default function Button({ children, to }: Props) {
  return (
    <NavLink to={to} className="nav-link-button">
      {children}
    </NavLink>
  );
}
