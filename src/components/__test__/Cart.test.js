import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../../components/mocks/itemListMockData.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import HeaderComponent from "../Header";
import { BrowserRouter } from "react-router";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should render restaurat menu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <HeaderComponent />
          <RestaurantMenu />
        </BrowserRouter>
      </Provider>
    )
  );
  const accordionTitlePanel = screen.getByText("Biryani Bowls (3)");
  fireEvent.click(accordionTitlePanel);
  const items = screen.getAllByTestId("itemList");
  expect(items.length).toBe(3);

  const addButtons = screen.getAllByRole("button", { name: "Add ✚" });
  fireEvent.click(addButtons[0]);
  const totalCartItems = screen.getByText("1 Items");
  expect(totalCartItems).toBeInTheDocument();
});

it("Should change the cart item value after second click", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <HeaderComponent></HeaderComponent>
          <RestaurantMenu />
        </BrowserRouter>
      </Provider>
    );
  });
  const accordionTitlePanel = screen.getByText("Pasta (3)");
  fireEvent.click(accordionTitlePanel);
  const addButtons = screen.getAllByRole("button", { name: "Add ✚" });
  fireEvent.click(addButtons[0]);
  const totalCartItems = screen.getByText("2 Items");
  expect(totalCartItems).toBeInTheDocument();
});

it("Should be render total cart items in cart component", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Cart />
        </BrowserRouter>
      </Provider>
    );
  });
  const addedCartItems = screen.getAllByTestId("addedCartItems");
  //Assertion
  expect(addedCartItems.length).toBe(2);
});

it("Should empty the cart after click clear cart button", () => {
  render(
    <Provider store={appStore}>
      <Cart />
    </Provider>
  );
  const clearCartButton = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCartButton);
  const emptyCartMessage = screen.getByText("Cart is Empty");
  expect(emptyCartMessage).toBeInTheDocument();
});
