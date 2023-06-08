import { Redirect } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Main from "../../components/Main";
import NavBar from "../../components/Navbar";
import Logo from "../../images/Logo.svg";
import { FaLaptopCode, FaFileCode } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import { PageHome } from "./styles";
import FormModal from "../../components/FormModal";
import { schemaRegisterTech, schemaUpdateTech, schemaRegisterWork, schemaUpdateWork } from "./validations";
import { toast } from "react-toastify";
import { MdLogout } from "react-icons/md";
import 'react-toastify/dist/ReactToastify.css';
import AnimatedPage from "../../components/AnimatedPage";
import ModalConfirmation from "../../components/ModalConfirmation";
import ContentTechnologies from "../../components/ContentTechnologies";
import ContentWorks from "../../components/ContentWorks";
import ModalC from "../../components/Modal";
import { buttonsRegisterTech, buttonsRegisterWork, buttonsUpdateTech, buttonsUpdateWork, fieldsRegisterTech, fieldsRegisterWork, fieldsUpdateTech, fieldsUpdateWork } from "./fields";
import ToastTechnologie from "../../components/ToastTechnologie";
import AnimationComputer from "../../components/AnimationComputer";
import AnimationError from "../../components/AnimationError";


function Home({ themeIsDefault, setThemeIsDefault, authenticated, setAuthenticated }) {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const [idUser] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:idUser")) || ""
  );
  const [techs, setTechs] = useState([]);
  const [user, setUser] = useState({});
  const [tittleForm, setTittleForm] = useState('')
  const [fieldsInputs, setFieldsInputs] = useState([])
  const [openedForm, setOpenedForm] = useState(false)
  const [buttonForm, setButtonForm] = useState([])
  const [schema, setSchema] = useState(schemaRegisterTech)
  const [tech, setTech] = useState()
  const [openedModalConfirm, setOpenedModalConfirm] = useState(false)
  const [openedModal, setOpenedModal] = useState(false) 
  const [onTechnologies, setOnTechnologies] = useState(true)
  const [works, setWorks] = useState([])
  const [work, setWork] = useState()
  const [mesageModal, setMesage] = useState()
  const [mesageConfirm, setMesageConfirm] = useState('')
  const [functionOnConfirm, setFunctionOnConfirm] = useState({f: {}})
  
  
  const onSubmitRegisterTechFunction = async (data) => {

    const result = await requisition(data, undefined, 'Tecnologia adicionada com sucesso!',"Ocorreu algum erro, talvez você já tenha adicionado essa tecnologia, tente atualizá-la", 'techs', 'post')
    if(result) {
      setTechs([...techs, result])
    }

  }
  
  const [onSubmitFunction, setOnSubmitFunction] = useState({f: {}})
  function deleteFunction() {

    if(onTechnologies) {
      requisitionDelete('techs', tech.id, 'Tecnologia deletada com successo!',"Ocorreu algum erro, tente novamente")
    } else {
      requisitionDelete('works', work.id, 'Projeto deletado com successo!', "Ocorreu algum erro, tente novamente")
    } 
  }

  function showSuccess(mesage) {
    toast.success(<><div className="computer"><AnimationComputer/></div><div>{mesage}</div></>,{
      autoClose:1000,
      theme: "dark"
    })
  }

  function showError(mesage) {
    toast.error(<><div><AnimationError/></div><div>{mesage}</div></>, {
      autoClose:5000,
      theme: "dark"
    })

  }

  function requisitionDelete(endpoint, id, mesageSuccess, mesageError) {
    axios.delete(`https://kenziehub.herokuapp.com/users/${endpoint}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {

      loadUserInfo()
        showSuccess(mesageSuccess)
        setOpenedForm(false)
        setOpenedModalConfirm(false)
        
    }).catch(() => {
      showError(mesageError)
    })
  }


  function loadUserInfo() {
    axios
      .get(`https://kenziehub.herokuapp.com/users/${idUser}`)
      .then((res) => {setUser(res.data)
        setTechs(res.data.techs)
        setWorks(res.data.works)
        
      })
      .catch((err) => {console.log(err)});
  }

  useEffect(() => {
    loadUserInfo();
  }, []);

  useEffect(() => {
    if(tech) {
      openModalUpdate()
    }
  }, [tech])

  useEffect(() => {
    if(work) {
      
      openModalUpdateWork()
    }
  }, [work])

  function openModalUpdateWork() {
    setOpenedForm(true)
    setTittleForm('Projeto detalhes')
    const fields = fieldsUpdateWork(work)
    
    setFieldsInputs(fields)

    setButtonForm(buttonsUpdateWork({f: () => {
      setOpenedModalConfirm(true)
      setMesageConfirm('Deseja mesmo excluir esse projeto?')
      setFunctionOnConfirm({f: deleteFunction})
    }}))
    setOnSubmitFunction({
      f: onSubmitUpdateWorkFunction
    })
    setSchema(schemaUpdateWork)
  }

  function onSubmitUpdateWorkFunction(data) {

    requisition(data, work.id, 'Projeto alterado com sucesso!',"Ocorreu algum erro, tente novamente", 'works', 'put')

  }
    
  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  function logout() {
    localStorage.removeItem("@KenzieHub:token");
    localStorage.removeItem("@KenzieHub:idUser");
    setAuthenticated(false);
  }

  async function requisition(data, id, mesageSuccess, mesageError, endpoint, method) {


    const result = await axios[method](`https://kenziehub.herokuapp.com/users/${endpoint}${!!id ?`/${id}` : ''}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      
      loadUserInfo()
      showSuccess(mesageSuccess)

      setOpenedForm(false)

      return res.data
        
    }).catch((err) => {

      showError(mesageError)
      
    })

    return result
  }

  const onSubmitUpdateTechFunction = (data) => {

    requisition(data, tech.id, 'Tecnologia alterada com sucesso!',"Ocorreu algum erro, tente novamente", 'techs', 'put')
  }

  function openModalAdd() {
    
    setOpenedForm(true)
    setTittleForm('Cadastrar tecnologia')
    setFieldsInputs(fieldsRegisterTech)
    setButtonForm(buttonsRegisterTech)
    setOnSubmitFunction({
      f: onSubmitRegisterTechFunction
    })
    setSchema(schemaRegisterTech)
  }

  async function onSubmitRegisterWorkFunction(data) {
    const result = await requisition(data, undefined, 'Projeto adicionado com sucesso!',"Ocorreu algum erro, tente novamente", 'works', 'post')
    if(result) {
      setWorks([...works, result])
    }
    
  }

  function openModalWorkAdd() {
    
    setOpenedForm(true)
    setTittleForm('Cadastrar projeto')
    setFieldsInputs(fieldsRegisterWork)
    setButtonForm(buttonsRegisterWork)
    setOnSubmitFunction({
      f: onSubmitRegisterWorkFunction
    })
    setSchema(schemaRegisterWork)
  }


  function openModalUpdate() {
    setOpenedForm(true)
    setTittleForm('Tecnologia detalhes')
    const fields = fieldsUpdateTech(tech)
    const index = fields[1].options.findIndex((item) => item.text===tech.status)
    fields[1].options[index].value = ''
    setFieldsInputs(fields)

    const buttons = buttonsUpdateTech({f:() => {
      setOpenedModalConfirm(true)
      setMesageConfirm('Deseja mesmo excluir essa tecnologia?')
      setFunctionOnConfirm({f: deleteFunction})
    }})
    setButtonForm(buttons)
    setOnSubmitFunction({
      f: onSubmitUpdateTechFunction
    })
    setSchema(schemaUpdateTech)
  }

  return (
    <AnimatedPage>
    <PageHome>
      <NavBar>
        <img onClick={() => setThemeIsDefault(!themeIsDefault)} src={Logo} alt="logo" />
        <div>
        <Button fontSize="1.3rem" padding="0.2rem 0.5rem" onClick={() => {
      setOpenedModalConfirm(true)
      setMesageConfirm('Deseja mesmo sair?')
      setFunctionOnConfirm({f: logout})
    }}><MdLogout/></Button>
        <Button fontSize="1.3rem" padding="0.2rem 0.5rem"  onClick={() => setOnTechnologies(true)} bgColor={onTechnologies ? "var(--color-primary)" : null} ><FaLaptopCode/></Button>
        <Button fontSize="1.3rem" padding="0.2rem 0.5rem"  onClick={() => setOnTechnologies(false)} bgColor={!onTechnologies ? "var(--color-primary)" : null}><FaFileCode/></Button>
        </div> 
      </NavBar>
      <Header>
        {" "}
        <h1>Olá, {user.name} </h1> <p>{user.course_module}</p>{" "}
      </Header>
      <main>
        <Main>
         {onTechnologies ?  <ContentTechnologies openModalAdd={openModalAdd} techs={techs} setTech={setTech} /> 
         : <ContentWorks setMesage={setMesage} setOpenedModal={setOpenedModal} openModalAdd={openModalWorkAdd} works={works} setWork={setWork} />}
          
        </Main>
      </main>
      <ToastTechnologie/>
      
      { openedForm ? 
        
          <FormModal setTech={onTechnologies ? setTech : setWork} onSubmitFunction={onSubmitFunction} schema={schema} buttonForm={buttonForm} tittle={tittleForm} fieldsInputs={fieldsInputs} opened={openedForm} setOpened={setOpenedForm}/> : null
      }

      {
        openedModalConfirm ? 
        <ModalConfirmation  mesage={mesageConfirm} setOpened={setOpenedModalConfirm} opened={openedModalConfirm} buttons={[{
          title: 'Não',
          onClick: () => setOpenedModalConfirm(false)
        }, {
          bgColor: "var(--color-primary)",
          title: 'Sim',
          type: 'button',
          onClick: functionOnConfirm.f
        }]}/> : null
      }
      {
        openedModal ? <ModalC mesage={mesageModal} opened={openedModal} setOpenedModal={setOpenedModal}/> : null
      }
    </PageHome>
    </AnimatedPage>
  );
}

export default Home;
