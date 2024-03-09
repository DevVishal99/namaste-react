import { useDispatch } from "react-redux";
import { RES_IMG } from "../utlis/constants";
import { addItem } from "../utlis/cartSlice";
import { useState } from "react";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addItem(item));
  };
  

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-gray-200 border-b-2 text-left"
          data-testid = "foodItems"
        >
          <div className="flex justify-between">
            <div className="w-9/12">
              <span className="font-bold"> {item.card.info.name} </span>
              <span className="font-bold">
                - ₹{item.card.info.price / 100
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
                .00
              </span>
              <br></br>

              <span> {item.card.info.description}</span>
            </div>
            <div className="w-3/12">
              <img
                src={RES_IMG + item.card.info.imageId}
                className="absolute h-28 rounded-xl shadow-2xl"
              />
              <button
                className="relative bg-black text-white  rounded-xl ml-[80%] mb-[50%] shadow-xl py-1 px-2 hover:bg-white hover:text-black border border-red-400"
                onClick={() =>handleAdd(item)}
              >
                Add+
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
