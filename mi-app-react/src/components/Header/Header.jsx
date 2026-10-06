import { Link } from "react-router-dom";
import logo from "../../assets/react.svg"; 
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
    return (
    <header className="header-container"> 
        <Nav />
        <div className="logo-section">
            <Link to={"/"}>
                <img src={logo} className="logo-img" alt="Logo react" /> 
                <span className="logo-text">Tienda Reactiva</span> 
            </Link>
        </div>
    </header>
    );
};
