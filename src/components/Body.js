import { useEffect, useState, useContext } from "react";
import RestaurantCardComponent, {
  enhancedRestaurantCard,
} from "./RestaurantCard";
import { API_URL } from "../Utils/mock-data";
import ShimmerComponent from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");
  const RestaurantCardLessDeliveryTime = enhancedRestaurantCard(
    RestaurantCardComponent
  );
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const jsonData = await data.json();
    setData(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredData(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  useEffect(() => {
    setFilteredData(
      data.filter((rest) => {
        return rest.info.name
          .toLowerCase()
          .includes(searchedValue.toLowerCase());
      })
    );
  }, [searchedValue]);
  if (!onlineStatus) return <h1>Looks like you are offline</h1>;
  return (
    <div className="p-4">
      {data.length ? (
        <div>
          <div className="flex gap-4 mb-2">
            <button
              data-testid="topRatedResButton"
              className="p-2 rounded-md cursor-pointer bg-blue-300 shadow-md text-white"
              onClick={() => {
                setFilteredData(
                  filteredData?.filter((data) => data.info.avgRating > 4)
                );
              }}
            >
              Top Rated Resto
            </button>
            <button
              className="p-2 rounded-md cursor-pointer bg-green-400 shadow-md text-white"
              onClick={() => {
                setFilteredData(data);
              }}
            >
              Reset
            </button>
            <div className="border p-2 rounded-lg">
              <input
                type="search"
                placeholder="Search Restaurant"
                value={searchedValue}
                data-testid="searchInput"
                className="focus-visible:outline-0"
                onChange={(e) => setSearchedValue(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            {filteredData.map((rest) => (
              <Link to={`/restaurant/${rest.info.id}`} key={rest.info.id}>
                {rest.info.sla.deliveryTime > 30 ? (
                  <RestaurantCardComponent restData={rest} />
                ) : (
                  <RestaurantCardLessDeliveryTime restData={rest} />
                )}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1>
            <ShimmerComponent />
          </h1>
        </div>
      )}
    </div>
  );
};

export default Body;
