import swiggyLogo from "../../assets/swiggy-logo.svg";
import searchIcon from "../../assets/search-icon.svg";
import SignIcon from "../../assets/signin-icon.svg";
import HelpIcon from "../../assets/help-icon.svg";
import offersIcon from "../../assets/offers-icon.svg";
import cartIcon from "../../assets/cart-icon.svg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Header = () => {
    let online = useOnlineStatus();

    return (
        <header className="box-border flex justify-between p-5 shadow-md">
            <div className="absolute top-7 left-2">{online ? "💚" : "💘"}</div>
            <a href="/" className="mx-10">
                <img src={swiggyLogo} />
            </a>
            <h4 className="text-gray-900 font-bold font-mono py-2">Location</h4>
            <div className="  box-border py-2 px-7 fixed left-0 bottom-0 flex justify-between items-center bg-white max-sm:w-full lg:static w-1/2">
                <Link to={"/search"}>
                    <img src={searchIcon} className="w-8 py-1"/>
                    <h4 className="hidden">Search</h4>
                </Link>
                <Link to={"/offers"}>
                    <img src={offersIcon} className="w-8 py-1" />
                    <h4 className="hidden">Offers</h4>
                </Link>
                <Link to={"/help"}>
                    <img src={HelpIcon} className="w-8 py-1"/>
                    <h4 className="hidden">Help</h4>
                </Link>
                <Link to={"/signin"}>
                    <img src={SignIcon} className="w-8 py-1"/>
                    <h4 className="hidden">Sign In</h4>
                </Link>
                <Link to={"/cart"}>
                    <img src={cartIcon} className="w-8 py-1"/>
                    <h4 className="hidden">Cart</h4>
                </Link>
            </div>
        </header>
    );
};

export default Header;
