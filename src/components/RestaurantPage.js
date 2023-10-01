import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./shimmer";
import ErrorPage from "./ErrorPage";

const RestaurantPage = () => {
    const { id } = useParams();
    const [restaurantData, setRestaurantsData] = useState([]);
    const [showShimmer, setShowShimmer] = useState(true);
    const [restaurantName, setRestaurantName] = useState();
    const [restaurantCity, setRestaurantCity] = useState();
    const [restaurantImg, setRestaurantImg] = useState();
    useEffect(() => {
        fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7016176&lng=76.820049&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
        )
            .then((respones) => respones.json())
            .then((data) => {
                // console.log(
                //     "data",
                //     data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2]
                //         .card.card.itemCards
                // );
                setShowShimmer(false);
                // console.log(data?.data?.cards[0]?.card?.card.info.name);
                setRestaurantName(data?.data?.cards[0]?.card?.card?.info?.name),
                    setRestaurantCity(
                        data?.data?.cards[0]?.card?.card?.info?.city
                    ),
                    setRestaurantImg(
                        data?.data?.cards[0]?.card?.card?.info
                            ?.cloudinaryImageId
                    );
                setRestaurantsData(
                    data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2]
                        .card.card.itemCards
                );
            })
            .catch(() => {
                return <ErrorPage />;
            });
    }, []);
    return showShimmer ? (
        <Shimmer />
    ) : (
        <>
            <div className="about-restaurant">
                <img src={IMG_CDN_URL + restaurantImg} alt="restaurant image" />
                <div>
                    <h1 className="restaurant-name-in-menu">
                        {restaurantName}
                    </h1>
                    <h4 className="restaurant-city-in-menu">
                        {restaurantCity}
                    </h4>
                </div>
            </div>
            {!restaurantData?<h2 className="nothing-to-show">Nothing To Show</h2>:
            <div className="menu">
                {restaurantData?.map((menu) => {
                    return (
                        <div
                            className="restaurant-menu"
                            key={menu.card.info.id}
                        >
                            <div className="menu-img">
                                <img
                                    src={IMG_CDN_URL + menu.card.info.imageId}
                                    alt="menu"
                                    />
                            </div>
                            <div className="menu-discription">
                                <h3 className="menu-name">
                                    {menu.card.info.name}
                                </h3>
                                {menu.card.info.defaultPrice ? (
                                    <h3 className="menu-rating">
                                        {"₹" +
                                            menu.card.info.defaultPrice / 100}
                                    </h3>
                                ) : null}

                                <p>{menu.card.info.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            }
        </>
    );
};

export default RestaurantPage;
