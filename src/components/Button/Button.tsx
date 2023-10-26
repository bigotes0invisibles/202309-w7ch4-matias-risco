import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  innerText: string;
  className: string;
}

const Button = ({
  className,
  innerText,
  onClick,
  type,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled className={className} onClick={onClick} type={type}>
      {innerText}
    </ButtonStyled>
  );
};

export default Button;
