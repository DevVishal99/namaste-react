import { useState, useEffect } from "react";
import { json } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utlis/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);

  const {resId} = useParams();
  


  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const data = await fetch(
        MENU_URL + resId
    
    );
   

    const json = await data.json();

    setResMenu(json.data);
  };

  if (resMenu === null) {
    return <Shimmer></Shimmer>;
  }

  const { name, costForTwoMessage, avgRating } =
    resMenu?.cards[0]?.card?.card?.info;

  const cardItmes =
    resMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .itemCards;
    console.log(cardItmes);

  return (
    <div className="res-menu-card">
      <h1>{name}</h1>
      <p>
        Ratings {avgRating} - {costForTwoMessage}
      </p>
      <div className="res-menu">
        <h3>Menu</h3>
        <ul>
          {cardItmes.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
