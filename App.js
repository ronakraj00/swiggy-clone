import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import swiggyLogo from "./assets/swiggy-logo.svg";
import searchIcon from "./assets/search-icon.svg";
import SignIcon from "./assets/help-icon.svg";
import HelpIcon from "./assets/help-icon.svg";
import offersIcon from "./assets/offers-icon.svg";
import cartIcon from "./assets/cart-icon.svg";
const Header = () => {
    return (
        <header>
            <img src={swiggyLogo} />
            <h4>Location</h4>
            <div className="nav">
                <ul>
                    <li><img src={searchIcon} alt="" />
                    <a href="">Search</a></li>
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Header />
    </React.StrictMode>
);
