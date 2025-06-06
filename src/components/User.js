import { useState, useContext } from "react";
import { Outlet } from "react-router";
import UserContext from "../Utils/UserContext";

const User = ({ name, bio, avatar }) => {
  const { loggedInUser, setUserInfo } = useContext(UserContext);
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <input
          type="text"
          className="border p-1 rounded-md"
          placeholder="User name"
          value={loggedInUser || ""}
          onChange={(e) => setUserInfo(e.target.value)}
        />
      </div>
      <div className="rounded-lg shadow-xl w-[300px] m-4 p-4">
        <div className="flex justify-between">
          <div>
            Name: <span className="text-xl">{loggedInUser}</span>
          </div>
          <img src={avatar} className="h-[32px] rounded-[50px]" />
        </div>
        <h3>Bio: {bio}</h3>
        <h4>Contact: manav@gmail.com</h4>
        <Outlet />
      </div>
    </div>
  );
};

export default User;
