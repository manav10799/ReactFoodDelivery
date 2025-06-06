import { render, screen } from "@testing-library/react";
import RestaurantCardComponent, {
  enhancedRestaurantCard,
} from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMockData";
import "@testing-library/jest-dom";

it("Should render Restaurant Card Data with props", () => {
  render(<RestaurantCardComponent restData={MOCK_DATA.restData} />);

  const resText = screen.getByText("Theobroma");
  expect(resText).toBeInTheDocument();
});

it("Should render Restaurant Card Data with Delivery Labels", () => {
  const EnhancedComponent = enhancedRestaurantCard(RestaurantCardComponent);
  render(<EnhancedComponent restData={MOCK_DATA.restData}></EnhancedComponent>);

  const resText = screen.getByText("Faster delivery");
  expect(resText).toBeInTheDocument();
});
