import { useState,useEffect } from "react";
import { MENU_URL } from "./constants";



const useRestaurantMenu = (resId) =>{
    const [resMenu, setResMenu] = useState(null)

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const headers= {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
          }
        const data = await fetch(MENU_URL + resId,headers);
        const json = await data.json();

        setResMenu(json.data);

    }

    return resMenu;
}

export default useRestaurantMenu