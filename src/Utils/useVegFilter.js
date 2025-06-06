import { useMemo } from "react";

const useVegFilter = (resInfo, isVeg) => {
  const filteredRest = useMemo(() => {
    return resInfo?.cards
      ?.filter((items) => items?.card?.card?.itemCards)
      .map((items) => {
        const filteredItems = items.card.card.itemCards.filter(
          (item) => item?.card?.info?.itemAttribute?.vegClassifier === isVeg
        );

        return {
          ...items,
          card: {
            ...items.card,
            card: {
              ...items.card.card,
              itemCards: filteredItems,
            },
          },
        };
      })
      .filter((items) => items.card.card.itemCards.length > 0);
  }, [resInfo, isVeg]);
  return filteredRest;
};

export default useVegFilter;
