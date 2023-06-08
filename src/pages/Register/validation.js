import * as yup from 'yup';

export const schema =yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup
      .string()
      .email("Formato de email incorreto")
      .required("E-mail obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Sua senha deve ter pelo menos 6 caracteres"),
    confirmPassword: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password"), null], "Senhas não combinam"),
    bio: yup.string().required("Escreva algo sobre você"),
    contact: yup.string().required("Informe seu contato"),
    course_module: yup.string().required("Informe seu módulo"),
    
    
});