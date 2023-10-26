import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Button from "./Button";

describe("Given a component Button", () => {
  describe("When is render ", () => {
    test("It should be in the document", () => {
      const text = "Crear";

      render(<Button className="" innerText={text} />);
      const button = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user clicks the button and recives an action", () => {
    test("Then it should call the received action", async () => {
      const action = vi.fn();

      render(<Button className="" innerText="send" onClick={action} />);
      const button = screen.getByRole("button");
      await userEvent.click(button);

      expect(action).toHaveBeenCalled();
    });
  });
});
