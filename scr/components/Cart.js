import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utlis/cartSlice";

const Cart = () =>{

    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(clearCart());
    }

    const cartItems = useSelector((store) => store.cart.items);

    if (cartItems== null){
        return <p>Please Add Items to your cart</p>
    }
    return(
        <><div className="text-center font-bold text-2xl m-5 p-5">Cart</div>
        <div className="text-center">
        <button className="text-center m-2 p-2 bg-black text-white rounded-2xl" onClick={handleClear}>Clear cart
        </button>
        </div>
        
        <div className="w-6/12 m-auto">
            <ItemList items={cartItems}/>

        </div>

    
        </>
    )
}

export default Cart;