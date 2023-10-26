import Form from "../Form/Form";
import AppStyled from "./AppStyled";
const App = (): React.ReactElement => {
  return (
    <AppStyled className="app">
      <Form />
    </AppStyled>
  );
};

export default App;
