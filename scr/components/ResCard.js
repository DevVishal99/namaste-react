import { useContext } from "react";
import { RES_IMG } from "../utlis/constants";
import UserContext from "../utlis/UserContext";

const ResCard = (props) => {
  const {loggedInUser} = useContext(UserContext);
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="w-56 h-96 bg-gray-200 hover:bg-gray-300 rounded-md">
      <div className="res-logo px-8 py-4">
        <img
          className="w-44 rounded-md shadow-lg"
          src={RES_IMG + cloudinaryImageId}
        />
      </div>
      <h3 className="font-bold text-center text-xl m-3">{name}</h3>
      <h4 className="font-bold m-2  text-wrap">
        Cusines : {cuisines.join(", ")}.
      </h4>
      <h4 className="font-bold m-2">Ratings - {avgRating}</h4>
      <h4 className="font-bold m-2">Cost for two : {costForTwo} </h4>
      <h4 className="font-bold m-2">User : {loggedInUser}  </h4>
    </div>
  );
};
export const withOpenTime = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-400 text-white rounded-lg p-1">Open</label>
        <ResCard {...props}/>
      </div>
    );
  };
};

export default ResCard;
