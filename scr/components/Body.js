import resList from "../utlis/mockData";
import ResCard from "./ResCard";

const Body = () => {
    return (
        <><div className="search">Search</div>

        <div className="res-container">
            {
                resList.map((restaurant)=>
                    (<ResCard key={restaurant.data.id} resData={restaurant} />)
                )
            }
        
        
        </div></>
    )        
    
}

export default Body;