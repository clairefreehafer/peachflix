import MagnifyingGlass from "../images/magnifying-glass.svg";
import "./search.css";

type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function Search({ onChange }: Props) {
  return (
    <div className="search-container">
      <img src={MagnifyingGlass} alt="" className="magnifying-glass" />
      <input
        type="search"
        placeholder="Search"
        onChange={onChange}
        className="search"
      />
    </div>
  );
}
