import RestaurantCategory from "./RestaurantCategory";

const ItemsAccordion = ({ items, showItems, setShowItems, id }) => {
  return (
    <div>
      <p
        className="font-bold p-4 w-3xl border cursor-pointer shadow-md"
        onClick={() => {
          if (!showItems) setShowItems(id);
          else setShowItems(null);
        }}
      >
        {items?.card?.card?.title} ({items?.card?.card?.itemCards.length})
      </p>
      {showItems && <RestaurantCategory items={items?.card?.card?.itemCards} />}
    </div>
  );
};
export default ItemsAccordion;
