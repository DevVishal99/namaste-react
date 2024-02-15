import { Sum } from "../components/Sum";

test("This is to test Sum component", () => {
  const result = Sum(10, 5);

  expect(result).toBe(15);
});
