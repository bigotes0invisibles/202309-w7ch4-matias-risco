import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  onClick?: () => void;
  innerText: string;
  className: string;
}

const Button = ({
  className,
  innerText,
  onClick,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled className={className} onClick={onClick}>
      {innerText}
    </ButtonStyled>
  );
};

export default Button;
