import { useEffect, useState } from "react";
import { useParams } from "react-router";
const useRestaurantMenu = () => {
    const { id } = useParams();
    const [showShimmer, setShowShimmer] = useState(true);
    const [restaurantName, setRestaurantName] = useState();
    const [restaurantCity, setRestaurantCity] = useState();
    const [restaurantImg, setRestaurantImg] = useState();
    const [restaurantMenu, setRestaurantMenu] = useState([]);
    useEffect(() => {
        fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7016176&lng=76.820049&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
        )
            .then((respones) => respones.json())
            .then((data) => {
                setShowShimmer(false);
                setRestaurantMenu(
                    data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2]
                        .card.card.itemCards
                );
                setRestaurantName(data?.data?.cards[0]?.card?.card?.info?.name);
                setRestaurantCity(data?.data?.cards[0]?.card?.card?.info?.city);
                setRestaurantImg(
                    data?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
                );
            });
        // .catch(() => {
        //     return <ErrorPage />;
        // });
    }, []);

    return [
        restaurantMenu,
        restaurantName,
        restaurantImg,
        restaurantCity,
        showShimmer,
    ];
};

export default useRestaurantMenu;
