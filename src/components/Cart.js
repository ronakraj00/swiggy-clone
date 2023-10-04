import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import RestaurantCard from "./RestaurantCard";
import RestaurantMenu from "./RestaurantMenu";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();

    function handleClearCart() {
        dispatch(clearCart());
    }
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <>
            <div className="heading">
                <button onClick={() => handleClearCart()}>clear cart</button>
                <h1>Cart</h1>
                <button title="... coming soon">checkout</button>
            </div>
            {cartItems.length == 0 ? (
                <h3 className="its-empty">Its empty 😯</h3>
            ) : (
                <div className="menu">
                    {cartItems.map((item) => (
                        <RestaurantMenu
                            menu={item}
                            calledBy={"Cart"}
                            key={item.id}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default Cart;
