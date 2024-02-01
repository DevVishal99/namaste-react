import { LOGO_IMG } from "../utlis/constants";
import { useState } from "react";

const Header = () => {
    const [loginBtn , setLoginBtn] = useState('login') 
    return (
        <div className="header">

            <div className="logo">
                <img src={LOGO_IMG} />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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