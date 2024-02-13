import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCatogery = ({ data,showItems,setItem }) => {


const handleClick = () => {
  setItem()
    

}
  return (
    <div>
      <div className="w-6/12 mx-auto my-2 py-4 bg-gray-100 shadow-xl ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>

        </div>
        
        <div>
         {showItems && <ItemList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};
export default RestaurantCatogery;
