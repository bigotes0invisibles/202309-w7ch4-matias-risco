import styled from "styled-components";

const FormStyled = styled.form`
  &.form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__input {
      display: flex;
      flex-direction: row;
      gap: 5px;
    }
  }
`;
export default FormStyled;
