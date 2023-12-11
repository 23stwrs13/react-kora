import './../../css/style.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return ( 
        <header className="header">
            <div className="logo"></div>
            <div className="menu">
                <NavLink to="/">
                    <div className="menu-pinct"><a href="../практическая работа 2/index.html">Main</a></div>
                </NavLink>
                <NavLink to="/catalog">
                    <div className="menu-pinct"><a href="../практическая работа 2/catalog.html">catalog</a></div>
                </NavLink>
                <NavLink to="/media">
                    <div className="menu-pinct"><a href="../практическая работа 2/media.html">Categories and media</a></div>
                </NavLink>
                <NavLink to="/community">
                    <div className="menu-pinct"><a href="../практическая работа 2/community.html">community</a></div>
                </NavLink>
                <NavLink to="/account">
                    <div className="menu-pinct"><a href="../практическая работа 2/account.html">Account</a></div>
                </NavLink>
            </div>
        </header>
     );
}
 
export default Header;