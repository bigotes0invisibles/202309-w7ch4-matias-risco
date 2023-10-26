import Button from "../Button/Button";

const Form = (): React.ReactElement => {
  const sendForm: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={sendForm}>
      <div className="input">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
      </div>
      <div className="input">
        <label htmlFor="name">Name:</label>
        <input type="url" id="name" />
      </div>

      <div className="input">
        <label htmlFor="name">Name:</label>
        <input type="number" id="name" />
      </div>
      <Button className="button" innerText="Crear formulario" type="submit" />
    </form>
  );
};

export default Form;
