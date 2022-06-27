import "./PageHeader.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/BMO-Logo.svg";
import search from "../../assets/icons/Search.svg";
import location from "../../assets/icons/Location.svg";
import help from "../../assets/icons/Help.svg";
import language from "../../assets/icons/Language-Selection.svg";

const PageHeader = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <Link to="/">
          <img className="nav-logo__image" src={logo} alt="BMO logo" />
        </Link>
      </div>
      <div className="nav-options">
        <img className="nav-options__image" src={search} alt="Search Icon" />
        <img
          className="nav-options__image"
          src={location}
          alt="Location Icon"
        />
        <img className="nav-options__image" src={help} alt="Help Icon" />
        <img
          className="nav-options__image"
          src={language}
          alt="Language Icon"
        />
      </div>
    </nav>
  );
};

export default PageHeader;
