import { ButtonStyled } from "./styles";


function Button({children,...rest}) {
    return (
        <ButtonStyled {...rest}>
            {children}
        </ButtonStyled>
    )
}

export default Button;