import { Link } from 'react-router-dom';
import "./Header.css"
import logo from "../../assets/img/logo.svg"
import icono from "../../assets/img/icon.png"

export default function Header() {
    return (
        <div>
            <div className="header">
                <img className="img-logo" src={logo} alt="Logo" />
                <Link to="saved"><img className="icon-header" src={icono} alt="Icon saved" /></Link>  
            </div>
        </div>
    )
}
