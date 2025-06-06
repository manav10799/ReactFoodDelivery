import { useContext, useState } from "react";
import { logoUrl } from "../Utils/mock-data";
import { Link } from "react-router";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const onlineStatus = useOnlineStatus();
  const [isLogin, setIsLogin] = useState(false);
  const user = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex items-center justify-between shadow-lg bg-white dark:bg-amber-800">
      <div>
        <img src={logoUrl} className="h-[100px] w-[100px]" />
      </div>
      <div className="p-4">
        <ul className="flex gap-4">
          <li>
            <p>Online Status: {onlineStatus ? "✅" : "❌"}</p>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">
              <div className="flex">
                <p>Cart:</p>
                <span className="mx-1 font-bold">{cartItems.length} Items</span>
              </div>
            </Link>
          </li>
          <li
            onClick={() => setIsLogin(isLogin ? false : true)}
            className="cursor-pointer login"
          >
            {isLogin ? "Logout - " : "Login"}
            <span className="mx-2">{isLogin && user.loggedInUser}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
