import useRestaurantMenu from "../utlis/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  // console.log(resMenu);

  if (resMenu === null) {
    return <Shimmer/>
  }

  const { name, costForTwoMessage, avgRating } =
    resMenu?.cards[0]?.card?.card?.info;

  const cardItmes =
    resMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .itemCards;
  // console.log(cardItmes);

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
            <li key={item.card.info.id}>{item.card.info.name}- Rs.{item.card.info.price/100}.00</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
