import Star from "../images/star-white.svg";
import "./Button.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  icon?: boolean;
}

export default function Button({ children, variant, icon, ...props }: Props) {
  return (
    <button className={`button ${variant}`} {...props}>
      {icon && <img src={Star} alt="" className="icon" />}
      {children}
    </button>
  );
}
