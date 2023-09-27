import RestaurantCard from "./RestaurantCard";
import { cards } from "../data";

const RestaurantList = () => {
    return (
        <div className="r-list">
            {cards.restaurants.map((restaurant) => {
                return (
                    <RestaurantCard
                        {...restaurant.info}
                        key={restaurant.info.id}
                    />
                );
            })}
        </div>
    );
};

export default RestaurantList;
