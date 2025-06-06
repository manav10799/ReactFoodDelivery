import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import useVegFilter from "../Utils/useVegFilter";
import RestaurantCategory from "./RestaurantCategory";
import ItemsAccordion from "./ItemsAccordion";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [isVeg, setIsVeg] = useState("NONE");
  const [isOpen, setIsOpen] = useState(false);
  const [showItems, setShowItems] = useState(null);
  const { resInfo, resData, filteredMenu, setFilteredMenu } =
    useRestaurantMenu(resId);
  const filteredRest = useVegFilter(filteredMenu, isVeg);

  useEffect(() => {
    if (isVeg === "VEG") {
      setFilteredMenu({ cards: filteredRest });
    } else {
      setFilteredMenu(resInfo);
    }
  }, [isVeg]);

  const handleCheckbox = () => {
    setIsVeg((prevState) => (prevState === "VEG" ? "NONE" : "VEG"));
  };

  if (resData === null) return <h1>Loading</h1>;
  return (
    <div className="flex flex-col p-4 gap-2 items-center">
      <h1 className="text-2xl font-bold">{resData?.name}</h1>
      <h5 className="text-sm">
        {resData?.cuisines?.join(", ")} {resData?.costForTwoMessage}
      </h5>
      <h3 className="text-xl">Menu</h3>
      <div>
        <label>
          Is VEG
          <input type="checkbox" onChange={handleCheckbox} className="ml-2" />
        </label>
      </div>
      {filteredMenu?.cards?.map((items, i) =>
        items?.card?.card?.itemCards ? (
          <ItemsAccordion
            items={items}
            key={i}
            id={i}
            setShowItems={setShowItems}
            showItems={i === showItems ? true : false}
          />
        ) : null
      )}
    </div>
  );
};

export default RestaurantMenu;
