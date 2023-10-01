import { useState, useEffect } from "react";
import restaurantData from "../../data";
const useRestaurants = () => {
    
    const [restaurants, setRestaurants] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);
    const [showShimmer, setShowShimmer] = useState(true);

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

    return [restaurants, filterRestaurants, setFilterRestaurants, showShimmer];
};

export default useRestaurants;
