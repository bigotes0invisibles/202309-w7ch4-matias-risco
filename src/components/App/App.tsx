import Form from "../Form/Form";
import AppStyled from "./AppStyled";
const App = (): React.ReactElement => {
  return (
    <AppStyled className="app">
      <header className="header">
        <h1>Perezoso Formulario</h1>
      </header>
      <Form />
    </AppStyled>
  );
};

export default App;
