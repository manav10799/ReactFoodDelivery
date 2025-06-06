import { fireEvent, render, screen } from "@testing-library/react";
import HeaderComponent from "../Header";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

it("Should render header", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <HeaderComponent />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});

describe("Cart Items Test", () => {
  it("Should render component with cart items )", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <HeaderComponent />
        </Provider>
      </BrowserRouter>
    );
    const cartItem = screen.getByText("Cart:");
    // const cartItem = screen.getByText(/Cart/);
    expect(cartItem).toBeInTheDocument();
  });

  it("Should render component with 0 items )", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <HeaderComponent />
        </Provider>
      </BrowserRouter>
    );
    const zeroItems = screen.getByText("0 Items");
    expect(zeroItems).toBeInTheDocument();
  });
});

it("Should change to login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <HeaderComponent />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByText("Login");
  fireEvent.click(loginButton);
  const logoutButton = screen.getByText(/Logout/);

  expect(logoutButton).toBeInTheDocument();
});
