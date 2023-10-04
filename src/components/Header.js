import swiggyLogo from "../../assets/swiggy-logo.svg";
import searchIcon from "../../assets/search-icon.svg";
import SignIcon from "../../assets/signin-icon.svg";
import HelpIcon from "../../assets/help-icon.svg";
import offersIcon from "../../assets/offers-icon.svg";
import cartIcon from "../../assets/cart-icon.svg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
    let online = useOnlineStatus();

    let noOfCartItems = useSelector((store) => store.cart.items);

    return (
        <header>
            <div className="online-status">{online ? "💚" : "💘"}</div>
            <a href="/">
                <img src={swiggyLogo} />
            </a>
            <h4 className="location">Location</h4>
            <div className="nav">
                <Link to={"/search"}>
                    <img src={searchIcon} alt="" />
                    <h4 href="">Search</h4>
                </Link>
                <Link to={"/offers"}>
                    <img src={offersIcon} alt="" />
                    <h4 href="">Offers</h4>
                </Link>
                <Link to={"/help"}>
                    <img src={HelpIcon} alt="" />
                    <h4 href="">Help</h4>
                </Link>
                <Link to={"/signin"}>
                    <img src={SignIcon} alt="" />
                    <h4 href="">Sign In</h4>
                </Link>
                <Link to={"/cart"}>
                    <img src={cartIcon} alt="" />
                    <h4 href="">Cart</h4>
                    <p
                        style={{
                            color: "orangered",
                        }}
                    >
                        {noOfCartItems.length}
                    </p>
                </Link>
            </div>
        </header>
    );
};

export default Header;
