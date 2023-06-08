export const buttonsUpdateTech = (onClick) => [{
    title: 'Salvar alterações',
    bgColor: "var(--color-primary)",
    type: 'submit'
  }, {
    title: 'Excluir',
    type: 'button',
    onClick: onClick.f
}]

export const buttonsUpdateWork = (onClick) => [{
    title: 'Salvar alterações',
    bgColor: "var(--color-primary)",
    type: 'submit'
  }, {
    title: 'Excluir',
    type: 'button',
    onClick: onClick.f
  }]

export const fieldsRegisterWork = [{
    field: 'input',
    label: 'Título*',
    name: 'title',
  },{
    field: 'input',
    label: 'Descrição*',
    name: 'description',
  },{
    field: 'input',
    label: 'Link do projeto*',
    name: 'deploy_url',
  }]

export const fieldsRegisterTech = [
    {
    field: 'input',
    label: 'Nome*',
    name: 'title',
  },{
    field: 'select',
    name: 'status',
    label: 'Selecionar status',
    options: [{
      value: '',
      text: 'Escolha um status'
    },{
      value: 'Iniciante',
      text: 'Iniciante'
    }, {
      value: 'Intermediário',
      text: 'Intermediário'
     
    }, {
      value: 'Avançado',
      text: 'Avançado'
      
    }] }]

    export const buttonsRegisterWork = [{
        title: 'Cadastrar Projeto',
        bgColor: "var(--color-primary)",
        type: 'submit'
      }]
      

export const buttonsRegisterTech = [{
    title: 'Cadastrar tecnologia',
    bgColor: "var(--color-primary)",
    type: 'submit'
  }]

export const fieldsUpdateWork = (work) => [{
    field: 'input',
    label: 'Título',
    name: 'title',
    defaultValue: work.title 
  },{
    field: 'input',
    label: 'Descrição',
    name: 'description',
    defaultValue: work.description 
  },{
    field: 'input',
    label: 'Link do projeto',
    name: 'deploy_url',
    defaultValue: work.deploy_url 
  }]

export const fieldsUpdateTech = (tech) => [{
    field: 'input',
    label: 'Nome',
    value: tech.title 
  },{
    field: 'select',
    name: 'status',
    label: 'Selecionar status',
    options: [{
      value: 'Iniciante',
      text: 'Iniciante'
    }, {
      value: 'Intermediário',
      text: 'Intermediário'
     
    }, {
      value: 'Avançado',
      text: 'Avançado'
      
    }]
  }]