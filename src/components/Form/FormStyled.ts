import styled from "styled-components";

const FormStyled = styled.form`
  &.form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: fit-content;
  }

  .form__input {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5px;
  }
`;
export default FormStyled;
