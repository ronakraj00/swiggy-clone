import { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList";

function filterData(value, restaurantData) {
    return restaurantData.filter((r) =>
        r.info.name.toLowerCase().includes(value.toLowerCase())
    );
}

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);
    useEffect(() => {
        try {
            fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7016176&lng=76.820049&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
                { mode: "cors" }
            )
                .then((response) => response.json())
                .then((data) => {
                    let restaurantData =
                        data.data.cards[1].card.card.gridElements.infoWithStyle
                            .restaurants;
                    setFilterRestaurants(restaurantData);
                    setRestaurants(restaurantData);
                });
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    return (
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
            <RestaurantList restaurants={filterRestaurants} />;
        </>
    );
};

export default Body;
