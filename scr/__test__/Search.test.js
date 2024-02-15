import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/resBodyMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render Body with with ResCard and Search buttin ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const resCards = screen.getAllByTestId("res-test-id");
  expect(resCards.length).toBe(9);

});


it("Should work for search button", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const searchBtn = screen.getByRole("button", { name: "Search" });
    const inputText = screen.getByTestId("inputText");
  
    fireEvent.change(inputText, { target: { value: "b" } });
    fireEvent.click(searchBtn);
    const resCardsAfterSearch = screen.getAllByTestId("res-test-id");
  
    expect(resCardsAfterSearch.length).toBe(6);
  });
   
  it("Should work for Top rated restaurants button", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const topRatedBtn = screen.getByRole("button",{name : "Top Rated Restorunts"})
  
    
    fireEvent.click(topRatedBtn);
    const resCardsAfterTopRated = screen.getAllByTestId("res-test-id");
  
    expect(resCardsAfterTopRated.length).toBe(3);
  });
   