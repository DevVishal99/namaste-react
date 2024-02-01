import { RES_IMG } from "../utlis/constants"

const ResCard = (props) =>{
    const {resData } = props
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resData?.info
    return (
        <div className="res-card">
            <div className="res-logo">
                <img src={ RES_IMG + cloudinaryImageId}/>
            </div>
            <h3 className="res-name">{name}</h3>
            <h4 className="res-cusine">Cusines : {cuisines.join(', ')}</h4>
            <h4 className="res-rating">Ratings - {avgRating}</h4>
            <h4 className="res-rating">Cost for two : {costForTwo} </h4>
        </div>
    )
}

export default ResCard;