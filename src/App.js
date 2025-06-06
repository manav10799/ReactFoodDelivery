import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import AboutClass from "./components/AboutClass";
// import Grocery from "./components/Grocery";
import UserContext from "./Utils/UserContext";
import ThemeContext from "./Utils/ThemeContext";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();
  const { theme } = useContext(ThemeContext);
  const [currentTheme, setTheme] = useState();
  useEffect(() => {
    const data = {
      name: "Manav",
    };
    setUserInfo(data.name);
    setTheme("light");
    document.documentElement.setAttribute("theme", theme);
  }, []);

  return (
    <Provider store={appStore}>
      <ThemeContext.Provider value={{ theme: currentTheme, setTheme }}>
        <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
          <div className="app">
            <HeaderComponent />
            <Outlet />
          </div>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        //element: <AboutClass />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Not Loaded</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
