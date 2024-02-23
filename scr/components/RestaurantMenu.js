import { useState } from "react";
import useRestaurantMenu from "../utlis/useRestaurantMenu";
import RestaurantCatogery from "./RestaurantCatogery";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  const [item, setItem] = useState(0);
  


  if (resMenu === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, avgRating } =
    resMenu?.cards[2]?.card?.card;

  // const cardItmes =
  //   resMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
  //     .itemCards;

  const catogories =
    resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (catogery) =>
        catogery?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold m-4 text-2xl">{name}</h1>
      <p className=" font-bold text-lg">
        Ratings {avgRating} - {costForTwoMessage}
      </p>
      <div className="res-menu">
        {catogories.map((catogery,index) => (
          <RestaurantCatogery
            key={catogery?.card?.card?.title}
            data={catogery?.card?.card}
            showItems={index==item}
            setItem={() => setItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
