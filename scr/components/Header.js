import { LOGO_IMG } from "../utlis/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";
import UserContext from "../utlis/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [loginBtn , setLoginBtn] = useState('login') 
    const OnlineStatus = useOnlineStatus();
    const data = useContext(UserContext);
    const {loggedInUser} = data;
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)
    
    
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">

            <div className="logo">
                <img className="w-36 h-32" src={LOGO_IMG} />
            </div>

            <div className="flex">
                <ul className="flex content-center items-center text-lg font-bold">
                    <li className="p-2 m-2  hover:bg-pink-300 hover:rounded-xl">Online Status : {OnlineStatus ? "🟢" : "🔴"}</li>
                    <li className="p-2 m-2  hover:bg-pink-300 hover:rounded-xl">
                    <Link to={'/'}>Home</Link>
                        </li>
                    <li className="p-2 m-2 hover:bg-pink-300 hover:rounded-xl"><Link to={'/about'}>About Us</Link></li>
                    <li className="p-2 m-2  hover:bg-pink-300 hover:rounded-xl"><Link to={'/contact'}>Contact Us</Link></li>
                    <li className="p-2  m-2  hover:bg-pink-300 hover:rounded-xl"><Link to={'/grocery'}>Grocery</Link></li>
                    <li className="p-2  m-2  hover:bg-pink-300 hover:rounded-xl"><Link to={"/cart"}> Cart ({cartItems.length}items)</Link></li>
                    <li className="p-2  m-2  hover:bg-pink-300 hover:rounded-xl">
                        <button className="login-btn" onClick={() =>{
                            
                            loginBtn === 'login' ? setLoginBtn('logout') : setLoginBtn('login')
        
                        }}>
                            {loginBtn}
                        </button>
                    </li>
                    <li className="p-2  m-2  hover:bg-pink-300 hover:rounded-xl">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;