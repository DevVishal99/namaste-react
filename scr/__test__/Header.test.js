import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utlis/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load a login button in Header component", () => {
  const setUserName = "vishak";
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");
  expect(loginButton).toBeInTheDocument();
});

it("Should render a cart items in Header component", () => {
  const setUserName = "vishak";
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItmes = screen.getByText("Cart (0items)");
  expect(cartItmes).toBeInTheDocument();
});

it("Should render a login button to logout button on click in Header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "logout" });
  expect(logoutButton).toBeInTheDocument();
});
