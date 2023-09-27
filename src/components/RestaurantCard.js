import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    costForTwo,
    avgRating,
    cuisines,
}) => {
    return (
        <div className="restaurant-card">
            <div className="card-img">
                <img src={IMG_CDN_URL + cloudinaryImageId} alt="img" />
            </div>
            <h3 className="card-name">{name}</h3>
            <h4 className="card-price">{costForTwo}</h4>
            <h4 className="card-rating">⭐ {avgRating}</h4>
            <p className="card-cuisines">{cuisines.join(", ")}</p>
        </div>
    );
};

export default RestaurantCard;