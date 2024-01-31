import resList from "../utlis/mockData";
import ResCard from "./ResCard";
import { useState } from "react";





const Body = () => {
    const [listOfRestorents, setListOfRestorents] = useState(resList)

    return (
        <><div className="filter-btn">
            <button onClick={() => {
                    const filteredList = listOfRestorents.filter(
                        (res) => res.data.avgRating >= 4
                    );

                    setListOfRestorents(filteredList)
                    

                }}
                >
                Top Rated Restorunts</button>
        </div>

        <div className="res-container">
            {
                listOfRestorents.map((restaurant)=>
                    (<ResCard key={restaurant.data.id} resData={restaurant} />)
                )
            }
        
        
        </div></>
    )        
    
}

export default Body;