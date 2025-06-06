import { useDispatch } from "react-redux";
import { addItems } from "../Utils/cartSlice";

const RestaurantCategory = ({ items }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {items?.map((menuItem) => (
          <li key={menuItem.card.info.id} data-testid="itemList">
            <div className="border-b-1 my-1 border-gray-300 flex justify-between items-start">
              <div className="flex flex-col">
                <span className="font-bold">
                  {menuItem.card.info.name} ~ ₹{menuItem.card.info.price / 100}
                </span>
                <span className="w-[600px] text-sm my-1 text-gray-400">
                  {menuItem.card.info.description}
                </span>
              </div>
              <button
                className="cursor-pointer rounded-sm bg-cyan-400 px-4 py-1 shadow-md mt-2"
                onClick={() => {
                  dispatch(addItems(menuItem));
                }}
              >
                Add ✚
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantCategory;
