import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    costForTwo,
    avgRating,
    cuisines,
}) => {
    return (
        <div className="p-2 flex gap-1 hover:scale-[.97] transition-all duration-300 ease-in-out">
            <div className="card-img rounded-lg overflow-hidden w-1/2 shadow-lg flex">
                <img src={IMG_CDN_URL + cloudinaryImageId} alt="img" />
            </div>
            <div className="w-1/2 flex flex-col p-2">
                <h3 className="whitespace-nowrap text-ellipsis overflow-hidden font-bold text-xl">{name}</h3>
                <h4 className="text-gray-400">{costForTwo}</h4>
                <h4 className="bg-green-600 w-fit px-2 rounded-lg text-white">⭐ {avgRating}</h4>
                <p className="whitespace-nowrap text-ellipsis overflow-hidden">{cuisines?.join(", ")}</p>
            </div>
        </div>
    );
};

export default RestaurantCard;
