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
    ] = useRestaurantMenu();

    useEffect(() => {
        scrollTo(0, 0);
    }, []);

    return showShimmer ? (
        <Shimmer />
    ) : error ? (
        <ErrorPage />
    ) : (
        <main className="mb-20">
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
        </main>
    );
};

const AboutRestaurant = ({ restaurantName, restaurantImg, restaurantCity }) => {
    return (
        <div className="relative flex items-center">
            <img
                src={IMG_CDN_URL + restaurantImg}
                alt="restaurant image"
                className="w-full h-48"
            />
            <div className="backdrop-blur-md absolute z-10 text-center text-7xl w-full h-full font-extrabold font-serif text-white flex flex-col justify-center items-center">
                <h1>{restaurantName}</h1>
                <h4 className="text-lg">{restaurantCity}</h4>
            </div>
        </div>
    );
};

const Menu = ({ restaurantData }) => {
    return (
        <div className="menu">
            {restaurantData?.map((menu) => {
                return (
                    <div
                        className="cursor-pointer p-2 flex gap-1 hover:scale-[.97] transition-all duration-300 ease-in-out"
                        key={menu?.card?.info?.id}
                    >
                        <div className="card-img  overflow-hidden w-1/2 shadow-xl flex justify-center items-center h-[136px]">
                            <img
                                className="rounded-lg overflow-hidden"
                                src={
                                    menu?.card?.info?.imageId
                                        ? IMG_CDN_URL +
                                          menu?.card?.info?.imageId
                                        : swiggyLogo
                                }
                                alt="menu"
                            />
                        </div>
                        <div className="w-1/2 flex flex-col p-2">
                            <h3 className="whitespace-nowrap text-ellipsis overflow-hidden font-bold text-xl">
                                {menu?.card?.info?.name}
                            </h3>
                            {menu?.card?.info?.defaultPrice ? (
                                <h3 className="text-gray-400">
                                    {"₹" + menu?.card?.info?.defaultPrice / 100}
                                </h3>
                            ) : null}

                            <p className="text-ellipsis overflow-hidden line-clamp-3">
                                {menu?.card?.info?.description}
                            </p>
                        </div>
                    </div>
                );
            })}
            {restaurantData ? (
                <p className="text-orange-500 text-center py-10">
                    End Of List 😋
                </p>
            ) : null}
        </div>
    );
};
export default RestaurantPage;
