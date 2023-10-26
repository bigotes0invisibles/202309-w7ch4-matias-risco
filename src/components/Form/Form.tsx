import { PostApiPerezosos } from "../../data/Api-perezosos";
import PerezosoContext from "../../features/perezosos/store/PerezosoContext";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";
import { useState, useContext } from "react";

const initialPerezosoForm: PerezososStructure = {
  name: "",
  imageUrl: "",
  numberFingers: 0,
};

const Form = (): React.ReactElement => {
  const [perezosoForm, setPerezosoForm] = useState(initialPerezosoForm);
  const { perezosos, setPerezosos } = useContext(PerezosoContext);

  const onFormSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();

    const response = await PostApiPerezosos(perezosoForm);

    if (response.status !== 201) return;

    const peresozo = (await response.json()) as PerezososStructure;

    setPerezosos(() => [...perezosos, peresozo]);
  };

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPerezosoForm(() => ({
      ...perezosoForm,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <FormStyled onSubmit={onFormSubmit} className="form" autoComplete="off">
      <div className="form__input">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={onChangeData}
          value={perezosoForm.name}
          alt="name"
        />
      </div>
      <div className="form__input">
        <label htmlFor="imageUrl">image url:</label>
        <input
          type="url"
          id="imageUrl"
          value={perezosoForm.imageUrl}
          onChange={onChangeData}
          alt="url"
        />
      </div>
      <div className="form__input">
        <label htmlFor="numberFingers">number of fingers:</label>
        <input
          type="number"
          id="numberFingers"
          value={perezosoForm.numberFingers}
          onChange={onChangeData}
          alt="number"
        />
      </div>
      <Button className="button" innerText="Crear formulario" type="submit" />
    </FormStyled>
  );
};

export default Form;
