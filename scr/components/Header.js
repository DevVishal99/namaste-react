import { LOGO_IMG } from "../utlis/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";

const Header = () => {
    const [loginBtn , setLoginBtn] = useState('login') 
    const OnlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">

            <div className="logo">
                <img className="w-36 h-32" src={LOGO_IMG} />
            </div>

            <div className="nav-items">
                <ul className="flex content-center items-center text-lg font-bold">
                    <li className="p-5 m-5  hover:bg-pink-300 hover:rounded-xl">Online Status : {OnlineStatus ? "🟢" : "🔴"}</li>
                    <li className="p-5 m-5  hover:bg-pink-300 hover:rounded-xl">
                    <Link to={'/'}>Home</Link>
                        </li>
                    <li className="p-5 m-5 hover:bg-pink-300 hover:rounded-xl"><Link to={'/about'}>About Us</Link></li>
                    <li className="p-5 m-5  hover:bg-pink-300 hover:rounded-xl"><Link to={'/contact'}>Contact Us</Link></li>
                    <li className="p-5  m-5  hover:bg-pink-300 hover:rounded-xl"><Link to={'/grocery'}>Grocery</Link></li>
                    <li className="p-5  m-5  hover:bg-pink-300 hover:rounded-xl">Cart</li>
                    <li className="p-5  m-5  hover:bg-pink-300 hover:rounded-xl">
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