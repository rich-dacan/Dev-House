import * as yup from 'yup';

export const schema =yup.object().shape({
    email: yup
      .string()
      .email("Formato de email incorreto")
      .required("E-mail obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
    
});