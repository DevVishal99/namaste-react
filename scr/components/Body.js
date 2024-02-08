import ResCard, {withOpenTime} from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";

const Body = () => {
  const [listOfRestorents, setListOfRestorents] = useState([]);
  const [filteredRestaurents, setFilteredRestaunrents] = useState([]);
  const [searchText, setSearchText] = useState("");
  const OnlineStatus = useOnlineStatus();

  const ResWithOpenTime = withOpenTime(ResCard);



  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9698196&lng=77.7499721&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestorents(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaunrents(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (OnlineStatus === false) return <h2>Seems like you are offline.. Please Check Your Internet Connection🫠🫠</h2>

  return listOfRestorents.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="filter-btn">
        <input
        className="m-5 p-1 border-inherit border-x-black"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button

          className="bg-green-300 m-2 px-4 py-1 rounded-lg hover:bg-green-500 font-bold"
          onClick={() => {
            const filteredRes = listOfRestorents.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaunrents(filteredRes);
          }}
        >
          Search
        </button>
        <button
        className="ml-5 bg-gray-300 m-2 px-4 py-1 rounded-lg hover:bg-green-500 font-bold"
          onClick={() => {
            const filteredList = listOfRestorents?.filter(
              (res) => res.info.avgRating >= 4.3
            );

            setFilteredRestaunrents(filteredList);
          }}
        >
          Top Rated Restorunts
        </button>
      </div>

      <div className="flex flex-wrap  gap-5 bg">
        {filteredRestaurents.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >
            {restaurant.info.isOpen ? <ResWithOpenTime resData={restaurant}/> : <ResCard resData={restaurant} />}

            
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
