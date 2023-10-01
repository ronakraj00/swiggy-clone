import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./shimmer";
import ErrorPage from "./ErrorPage";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import swiggyLogo from "../../assets/swiggy-logo.svg";

const RestaurantPage = () => {
    let [
        restaurantData,
        restaurantName,
        restaurantImg,
        restaurantCity,
        showShimmer,
        error,
    ]= useRestaurantMenu();
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
                    <div className="restaurant-menu" key={menu.card.info.id}>
                        <div className="menu-img">
                            <img
                                src={
                                    menu.card.info.imageId
                                        ? IMG_CDN_URL + menu.card.info.imageId
                                        : swiggyLogo
                                }
                                alt="menu"
                            />
                        </div>
                        <div className="menu-discription">
                            <h3 className="menu-name">{menu.card.info.name}</h3>
                            {menu.card.info.defaultPrice ? (
                                <h3 className="menu-rating">
                                    {"₹" + menu.card.info.defaultPrice / 100}
                                </h3>
                            ) : null}

                            <p>{menu.card.info.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default RestaurantPage;
