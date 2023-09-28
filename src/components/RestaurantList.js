import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({restaurants}) => {
    console.log(typeof restaurants);
    console.log("inside",restaurants);

    return (
        <div className="r-list">
            {restaurants.map((restaurant) => {
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
