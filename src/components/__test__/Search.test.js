import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../../components/mocks/mockRestList.json";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
import { act } from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Res List for KFC input ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);
  const inputSearch = screen.getByTestId("searchInput");
  fireEvent.change(inputSearch, { target: { value: "KFC" } });
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(1);
});

it("Should able to render top rated restaurant after click", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeClick = screen.getAllByTestId("resCard");
  expect(cardsBeforeClick.length).toBe(20);
  const filterTopRatedButton = screen.getByTestId("topRatedResButton");
  fireEvent.click(filterTopRatedButton);
  const cardsAfterClick = screen.getAllByTestId("resCard");
  expect(cardsAfterClick.length).toBe(18);
});
