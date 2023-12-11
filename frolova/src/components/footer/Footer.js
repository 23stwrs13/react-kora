import './../../css/style.css'
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return ( 
        <footer className="footer">
            <hr className="line-foot" />
            <div className="menu foot">
                <NavLink to="/catalog">
                    <div className="menu-pinct"><a href="../практическая работа 2/catalog.html">catalog</a></div>
                </NavLink>
                <NavLink to="/media">
                    <div className="menu-pinct"><a href="../практическая работа 2/media.html">media</a></div>
                </NavLink>
                <NavLink to="/">
                <div className="icon-footer"></div>
                </NavLink>
                <NavLink to="/community">
                    <div className="menu-pinct"><a href="../практическая работа 2/community.html">community</a></div>
                </NavLink>
                <NavLink to="/account">
                    <div className="menu-pinct"><a href="../практическая работа 2/account.html">Account</a></div>
                </NavLink>
            </div>
        </footer>
     );
}
 
export default Footer;