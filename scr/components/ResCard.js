import { RES_IMG } from "../utlis/constants"

const ResCard = (props) =>{
    const {resData } = props
    const {name,cuisines,avgRating,deliveryTime,cloudinaryImageId} = resData?.data
    return (
        <div className="res-card">
            <div className="res-logo">
                <img src={ RES_IMG + cloudinaryImageId}/>
            </div>
            <h3 className="res-name">{name}</h3>
            <h4 className="res-cusine">{cuisines}</h4>
            <h4 className="res-rating">Ratings-{avgRating}</h4>
            <h4 className="res-rating">Delivery Time: {deliveryTime} Mins.</h4>
        </div>
    )
}

export default ResCard;