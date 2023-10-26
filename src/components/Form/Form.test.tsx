import { render, screen } from "@testing-library/react";
import Form from "./Form";

const initialPerezoso: PerezososStructure = {
  name: "",
  imageUrl: "",
  numberFingers: 0,
};

describe("Given a form component", () => {
  describe("When it is render", () => {
    test(`It should have ${JSON.stringify(initialPerezoso)}`, async () => {
      const expectedValue = initialPerezoso;

      render(<Form />);
      const name = (await screen.getByAltText("name")) as HTMLInputElement;
      const url = (await screen.getByAltText("url")) as HTMLInputElement;
      const numberFingers = (await screen.getByAltText(
        "number",
      )) as HTMLInputElement;

      expect(name.value).toBe(expectedValue.name);
      expect(url.value).toBe(expectedValue.imageUrl);
      expect(Number(numberFingers.value)).toBe(expectedValue.numberFingers);
    });
  });
});
