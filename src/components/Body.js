import { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList";
import Shimmer from "./shimmer";
import restaurantData from "../data";
import useRestaurants from "../utils/hooks/useRestaurants";

function filterData(value, restaurantData) {
    return restaurantData.filter(
        (r) =>
            r.info.name.toLowerCase().includes(value.toLowerCase()) ||
            r.info.cuisines
                .join(" ")
                .toLowerCase()
                .includes(value.toLowerCase()) ||
            (value[0] == ">"
                ? r.info.avgRating >= value.slice(1)
                : value[0] == "<"
                ? r.info.avgRating <= value.slice(1)
                : false)
    );
}

const Body = () => {
    const [searchText, setSearchText] = useState("");

    let [restaurants, filterRestaurants, setFilterRestaurants, showShimmer] =
        useRestaurants();

    return showShimmer ? (
        <Shimmer />
    ) : (
        <>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                        let data = filterData(e.target.value, restaurants);
                        setFilterRestaurants(data);
                    }}
                />
            </div>
            {filterRestaurants.length === 0 ? (
                <h2 className="no-restaurant-found"> No restaurant found 😔</h2>
            ) : (
                <RestaurantList restaurants={filterRestaurants} />
            )}
        </>
    );
};

export default Body;
