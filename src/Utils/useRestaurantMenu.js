import { useState, useEffect } from "react";
import { MenuItemApi } from "../Utils/mock-data";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [resData, setResData] = useState(null);
  const [filteredMenu, setFilteredMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(`${MenuItemApi}${resId}`);
    const jsonData = await data.json();
    setResInfo(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
    setFilteredMenu(
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
    );
    setResData(jsonData?.data?.cards[2]?.card?.card?.info);
  };

  return { resInfo, resData, filteredMenu, setFilteredMenu };
};

export default useRestaurantMenu;
