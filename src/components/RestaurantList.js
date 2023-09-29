import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({restaurants}) => {
    return (
        <div className="r-list">
            {restaurants.map((restaurant) => {
                return (
                    <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
                    <RestaurantCard
                        {...restaurant.info}
                        
                    />
                    </Link>
                )
            })}
        </div>
    );
};

export default RestaurantList;
