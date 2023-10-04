import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../constants";
import { addToCart } from "../utils/cartSlice";
import swiggyLogo from "../../assets/swiggy-logo.svg";
import RestaurantList from "./RestaurantList";
const RestaurantMenu = ({ menu, calledBy }) => {
    const dispatch = useDispatch();
    console.log(menu);
    function handleAddToCart(menu) {
        dispatch(addToCart(menu));
    }

    return (
        <div className="restaurant-menu">
            <div className="menu-img">
                <img
                    src={
                        menu?.imageId ? IMG_CDN_URL + menu?.imageId : swiggyLogo
                    }
                    alt="menu"
                />
            </div>
            <div className="menu-discription">
                <h3 className="menu-name">{menu?.name}</h3>
                {menu?.defaultPrice ? (
                    <h3 className="menu-rating">
                        {"₹" + menu?.defaultPrice / 100}
                    </h3>
                ) : null}

                <p>{menu?.description}</p>
                {calledBy == "RestaurantPage" ? (
                    <button
                        className="add-to-cart"
                        onClick={() => {
                            handleAddToCart(menu);
                            
                        }}
                    >
                        Add To Cart
                    </button>
                ) : null}
            </div>
        </div>
    );
};

export default RestaurantMenu;
