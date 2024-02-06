import { LOGO_IMG } from "../utlis/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";

const Header = () => {
    const [loginBtn , setLoginBtn] = useState('login') 
    const OnlineStatus = useOnlineStatus();
    return (
        <div className="header">

            <div className="logo">
                <img src={LOGO_IMG} />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Online Status : {OnlineStatus ? "🟢" : "🔴"}</li>
                    <li>
                    <Link to={'/'}>Home</Link>
                        </li>
                    <li><Link to={'/about'}>About Us</Link></li>
                    <li><Link to={'/contact'}>Contact Us</Link></li>
                    <li><Link to={'/grocery'}>Grocery</Link></li>
                    <li>Cart</li>
                    <li>
                        <button className="login-btn" onClick={() =>{
                            
                            loginBtn === 'login' ? setLoginBtn('logout') : setLoginBtn('login')
        
                        }}>
                            {loginBtn}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;