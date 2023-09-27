import { useState } from "react";
import RestaurantList from "./RestaurantList";
import restaurantData from "../data";

function filterData(value){
    return restaurantData.filter(r=>r.info.name.toLowerCase().includes(value.toLowerCase()));
}

const Body = () => {

    const [searchText,setSearchText]=useState("")
    const [restaurants,setRestaurants]=useState(restaurantData)

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={
                        (e) => {
                            setSearchText(e.target.value)
                            let data=filterData(e.target.value);
                            setRestaurants(data);
                        }
                    }
                />
            </div>
            <RestaurantList  restaurants={restaurants}/>;
        </>
    );
};

export default Body;
