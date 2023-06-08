import * as yup from 'yup';

export const schemaRegisterTech =  yup.object().shape({
    title: yup
      .string()
      .required("Informe o nome da tecnologia"),
    status: yup
      .string()
      .required("Campo obrigatório") 
});

/*{
	"title": "KenzieHub",
	"description": "I was the backend developer of this project, and i did it using Typescript and NodeJS",
	"deploy_url": "https://kenziehub.me"
}*/

export const schemaRegisterWork = yup.object().shape({
  title: yup
    .string()
    .required("Informe o nome do projeto"),
  description: yup
    .string()
    .required("Campo obrigatório"),
  deploy_url: yup.string()
    .required("Informe o link do projeto")
});



export const schemaUpdateTech = yup.object().shape({
    title: yup
      .string(),
      //.required("Informe o nome da tecnologia"),
    status: yup
      .string()
      .required("Altere o status")   
})

export const schemaUpdateWork = yup.object().shape({
  title: yup
    .string(),
    //.required("Informe o nome da tecnologia"),
   
})
