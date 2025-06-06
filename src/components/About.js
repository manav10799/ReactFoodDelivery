import { useEffect, useState } from "react";
import User from "./User";

const About = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/manav10799");
    const json = await data.json();
    setData(json);
  };
  return (
    <div className="flex">
      <User name={data.name} bio={data.bio} avatar={data.avatar_url} />
      {/* <UserClass name={"Manav Arora ~ Class Based"} location={"Panipat"} /> */}
    </div>
  );
};

export default About;
