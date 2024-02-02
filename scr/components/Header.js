import { LOGO_IMG } from "../utlis/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [loginBtn , setLoginBtn] = useState('login') 
    return (
        <div className="header">

            <div className="logo">
                <img src={LOGO_IMG} />
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                    <Link to={'/'}>Home</Link>
                        </li>
                    <li><Link to={'/about'}>About Us</Link></li>
                    <li><Link to={'/contact'}>Contact Us</Link></li>
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