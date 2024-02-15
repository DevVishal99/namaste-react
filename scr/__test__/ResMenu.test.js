import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../components/RestaurantMenu";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../utlis/appStore";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../components/Cart"

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) })
);

it("Should contain Restaurant Menu", async () => {
  await act(async () =>
    render(
        <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
        <RestaurantMenu />
        <Cart/>
      </Provider>
      </BrowserRouter>
    )
  );

  const menuAccordian = screen.getByText("Guilt Free Menu (15)");

  expect(menuAccordian).toBeInTheDocument();

  fireEvent.click(menuAccordian);

  expect(screen.getAllByTestId("foodItems").length).toBe(15);

  const addBtns = screen.getAllByRole("button", { name: "ADD+" });
  console.log(addBtns.length);

  expect(screen.getByText("Cart (0items)")).toBeInTheDocument();
  
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart (1items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart (2items)")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Cart (2items)"));

  expect(screen.getAllByTestId("foodItems").length).toBe(17);

  fireEvent.click(screen.getByRole("button",{name : "Clear cart"}));

  expect(screen.getAllByTestId("foodItems").length).toBe(15);
  
});
