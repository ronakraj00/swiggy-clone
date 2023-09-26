import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import swiggyLogo from "./assets/swiggy-logo.svg";
import searchIcon from "./assets/search-icon.svg";
import SignIcon from "./assets/help-icon.svg";
import HelpIcon from "./assets/help-icon.svg";
import offersIcon from "./assets/offers-icon.svg";
import cartIcon from "./assets/cart-icon.svg";
import { cards } from "./data";

const Header = () => {
    return (
        <header>
            <img src={swiggyLogo} />
            <h4>Location</h4>
            <div className="nav">
                <ul>
                    <li>
                        <img src={searchIcon} alt="" />
                        <a href="">Search</a>
                    </li>
                    <li>
                        <img src={offersIcon} alt="" />
                        <a href="">Offers</a>
                    </li>
                    <li>
                        <img src={HelpIcon} alt="" />
                        <a href="">Help</a>
                    </li>
                    <li>
                        <img src={SignIcon} alt="" />
                        <a href="">Sign In</a>
                    </li>
                    <li>
                        <img src={cartIcon} alt="" />
                        <a href="">Cart</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    costForTwo,
    avgRating,
    cuisines,
}) => {
    const imgSrc =
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/";
    return (
        <div className="restaurant-card">
            <div className="card-img">
                <img src={imgSrc + cloudinaryImageId} alt="img" />
            </div>
            <h3 className="card-name">{name}</h3>
            <h4 className="card-price">{costForTwo}</h4>
            <h4 className="card-rating">⭐ {avgRating}</h4>
            <p className="card-cuisines">{cuisines.join(", ")}</p>
        </div>
    );
};

const RestaurantList = () => {
    return (
        <div className="r-list">
            {cards.restaurants.map((restaurant) => {
                return (
                    <RestaurantCard
                        {...restaurant.info}
                        key={restaurant.info.id}
                    />
                );
            })}
        </div>
    );
};

const Body = () => {
    return <RestaurantList />;
};

const Footer = () => {
    return (
        <footer>
            <p>Made by Ronak Raj</p>
        </footer>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Header />
        <Body />
        <Footer />
    </React.StrictMode>
);
