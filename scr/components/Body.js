import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestorents, setListOfRestorents] = useState([]);
  const [filteredRestaurents, setFilteredRestaunrents] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  return listOfRestorents.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="filter-btn">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredRes = listOfRestorents.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaunrents(filteredRes);
          }}
        >
          search
        </button>
        <button
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

      <div className="res-container">
        {filteredRestaurents.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >
            <ResCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
