import { render, screen } from "@testing-library/react";
import ResCard from "../components/ResCard";
import RES_DATA_MOCK from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render ResCard with restaurant name", () => {
  render(
  <ResCard resData={RES_DATA_MOCK} />
  );

  const name = screen.getByText("Theobroma");

  expect(name).toBeInTheDocument();
});
