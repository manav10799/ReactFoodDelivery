import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import MOCK_DATA from "../../components/mocks/itemListMockData.json";
import "@testing-library/jest-dom";
import { act } from "react";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should check if is veg option is disabled", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );
  const vegCheckbox = screen.getByRole("checkbox");
  fireEvent.click(vegCheckbox);
  expect(vegCheckbox).toBeChecked();
});

it("Should check if clicking on checkbox changing the list", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );
  const vegCheckbox = screen.getByRole("checkbox");
  fireEvent.click(vegCheckbox);
  const accordionTextAfterVegOnly = screen.getByText("Biryani Bowls (1)");
  expect(accordionTextAfterVegOnly).toBeInTheDocument();
});
