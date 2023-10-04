import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./shimmer";
import ErrorPage from "./ErrorPage";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import swiggyLogo from "../../assets/swiggy-logo.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";
import RestaurantMenu from "./RestaurantMenu";
const RestaurantPage = () => {
    let [
        restaurantData,
        restaurantName,
        restaurantImg,
        restaurantCity,
        showShimmer,
        error,
    ] = useRestaurantMenu();

    useEffect(() => {
        scrollTo(0, 0);
    }, []);

    return showShimmer ? (
        <Shimmer />
    ) : error ? (
        <ErrorPage />
    ) : (
        <>
            <AboutRestaurant
                restaurantName={restaurantName}
                restaurantImg={restaurantImg}
                restaurantCity={restaurantCity}
            />
            {!restaurantData ? (
                <h2 className="nothing-to-show">Nothing To Show</h2>
            ) : (
                <Menu restaurantData={restaurantData} />
            )}
        </>
    );
};

const AboutRestaurant = ({ restaurantName, restaurantImg, restaurantCity }) => {
    return (
        <div className="about-restaurant">
            <img src={IMG_CDN_URL + restaurantImg} alt="restaurant image" />
            <div>
                <h1 className="restaurant-name-in-menu">{restaurantName}</h1>
                <h4 className="restaurant-city-in-menu">{restaurantCity}</h4>
            </div>
        </div>
    );
};

const Menu = ({ restaurantData }) => {

    return (
        <div className="menu">
            {restaurantData?.map((menu) => {
                return (
                    <RestaurantMenu menu={menu?.card?.info} key={menu?.card?.info?.id} calledBy={"RestaurantPage"}/>
                );
            })}
        </div>
    );
};
export default RestaurantPage;
