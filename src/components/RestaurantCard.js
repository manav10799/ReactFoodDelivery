import { restImagePrefixUrl } from "../Utils/mock-data";

const RestaurantCardComponent = (props) => {
  const { name, cuisines, avgRatingString, cloudinaryImageId, sla } =
    props?.restData?.info;
  const { deliveryTime } = sla;
  return (
    <div
      className="w-[250px] rounded-2xl p-4 shadow-md hover:shadow-2xl flex flex-col items-center"
      data-testid="resCard"
    >
      <img
        className="rounded-sm"
        alt="res-img"
        src={`${restImagePrefixUrl + cloudinaryImageId}`}
      />
      <h3 className="font-bold text-lg">{name}</h3>
      <h5 className="truncate">{cuisines.join(", ")}</h5>
      <h5>{avgRatingString}</h5>
      <h5>{deliveryTime} Mins</h5>
    </div>
  );
};

export const enhancedRestaurantCard = (RestaurantCardComponent) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-blue-50 p-1">Faster delivery</label>
        <RestaurantCardComponent {...props} />
      </div>
    );
  };
};

export default RestaurantCardComponent;
