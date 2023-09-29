import { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList";
import Shimmer from "./shimmer";
import restaurantData from "../data";

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
    const [restaurants, setRestaurants] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);

    let [showShimmer, setShowShimmer] = useState(true);

    useEffect(() => {
        fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7016176&lng=76.820049&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
            { mode: "cors" }
        )
            .then((response) => response.json())
            .then((data) => {
                let fetchedRestaurantData =
                    data?.data?.cards[2]?.card?.card?.gridElements
                        ?.infoWithStyle?.restaurants ||
                    data?.data?.cards[3]?.card?.card?.gridElements
                        ?.infoWithStyle?.restaurants ||
                    data?.data?.cards[1]?.card?.card?.gridElements
                        ?.infoWithStyle?.restaurants;
                console.log(data);
                console.log(fetchedRestaurantData);
                setShowShimmer(false);
                setFilterRestaurants(fetchedRestaurantData);
                setRestaurants(fetchedRestaurantData);
            })
            .catch(() => {
                setShowShimmer(false);
                setFilterRestaurants(restaurantData);
                setRestaurants(restaurantData);
            });
    }, []);

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
