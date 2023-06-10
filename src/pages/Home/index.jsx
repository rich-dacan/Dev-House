import { Redirect } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Generals/Header";
import Main from "../../components/Generals/Main";
import NavBar from "../../components/Generals/Navbar";
// import Logo from "../../images/Logo.svg";
import {
  FaLaptopCode,
  FaFileCode,
  FaSun,
  FaMoon,
  FaUserCircle,
} from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import { PageHome } from "./styles";
import ModalConfirmation from "../../components/Modals/ModalConfirmation";
import FormModal from "../../components/Modals/FormModal";
import ModalC from "../../components/Modals/Modal";

import {
  schemaRegisterTech,
  schemaUpdateTech,
  schemaRegisterWork,
  schemaUpdateWork,
  schemaUpdateProfile,
} from "./validations";

import { toast } from "react-toastify";
import { MdLogout } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import AnimatedPage from "../../components/AnimatedPage";
import ContentTechnologies from "../../components/ContentTechnologies";
import ContentWorks from "../../components/ContentWorks";
import {
  buttonsRegisterTech,
  buttonsRegisterWork,
  buttonsUpdateProfile,
  buttonsUpdateTech,
  buttonsUpdateWork,
  fieldsRegisterTech,
  fieldsRegisterWork,
  fieldsUpdateProfile,
  fieldsUpdateTech,
  fieldsUpdateWork,
} from "./fields";

import ToastTechnologie from "../../components/ToastTechnologie";
import AnimationComputer from "../../components/AnimationComputer";
import AnimationError from "../../components/AnimationError";
import { Footer } from "../../components/Generals/Footer";
import LoadingSpinner from "../../components/Loadings/LoadingSpinner";

function Home({
  theme,
  themeIsDefault,
  setThemeIsDefault,
  authenticated,
  setAuthenticated,
}) {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const [idUser] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:idUser")) || ""
  );
  const [user, setUser] = useState({});
  const [tech, setTech] = useState();
  const [techs, setTechs] = useState([]);
  const [onTechnologies, setOnTechnologies] = useState(true);
  const [work, setWork] = useState();
  const [works, setWorks] = useState([]);
  const [tittleForm, setTittleForm] = useState("");
  const [fieldsInputs, setFieldsInputs] = useState([]);
  const [openedForm, setOpenedForm] = useState(false);
  const [buttonForm, setButtonForm] = useState([]);
  const [schema, setSchema] = useState(schemaRegisterTech);
  const [openedModalConfirm, setOpenedModalConfirm] = useState(false);
  const [openedModal, setOpenedModal] = useState(false);
  const [mesageModal, setMesage] = useState();
  const [mesageConfirm, setMesageConfirm] = useState("");
  const [functionOnConfirm, setFunctionOnConfirm] = useState({ f: {} });
  const [onSubmitFunction, setOnSubmitFunction] = useState({ f: {} });

  const onSubmitRegisterTechFunction = async data => {
    const result = await requisition(
      data,
      undefined,
      "Tecnologia adicionada com sucesso!",
      "Ocorreu algum erro, talvez você já tenha adicionado essa tecnologia, tente atualizá-la",
      "techs",
      "post"
    );
    if (result) {
      setTechs([...techs, result]);
    }
  };

  function deleteFunction() {
    if (onTechnologies) {
      requisitionDelete(
        "techs",
        tech.id,
        "Tecnologia deletada com successo!",
        "Ocorreu algum erro, tente novamente"
      );
    } else {
      requisitionDelete(
        "works",
        work.id,
        "Projeto deletado com successo!",
        "Ocorreu algum erro, tente novamente"
      );
    }
  }

  function showSuccess(message) {
    toast.success(
      <>
        <div className="computer">
          <AnimationComputer />
        </div>
        <div>{message}</div>
      </>,
      {
        autoClose: 1000,
        theme: "dark",
      }
    );
  }

  function showError(message) {
    toast.error(
      <>
        <div>
          <AnimationError />
        </div>
        <div>{message}</div>
      </>,
      {
        autoClose: 5000,
        theme: "dark",
      }
    );
  }

  function requisitionDelete(endpoint, id, messageSuccess, messageError) {
    axios
      .delete(`https://kenziehub.herokuapp.com/users/${endpoint}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        loadUserInfo();
        showSuccess(messageSuccess);
        setOpenedForm(false);
        setOpenedModalConfirm(false);
      })
      .catch(() => {
        showError(messageError);
      });
  }

  function loadUserInfo() {
    axios
      .get(`https://kenziehub.herokuapp.com/users/${idUser}`)
      .then(res => {
        setUser(res.data);
        setTechs(res.data.techs);
        setWorks(res.data.works);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    loadUserInfo();
  }, []);

  useEffect(() => {
    if (tech) {
      openModalUpdate();
    }
  }, [tech]);

  useEffect(() => {
    if (work) {
      openModalUpdateWork();
    }
  }, [work]);

  function openModalUpdateWork() {
    setOpenedForm(true);
    setTittleForm("Projeto detalhes");
    const fields = fieldsUpdateWork(work);

    setFieldsInputs(fields);

    setButtonForm(
      buttonsUpdateWork({
        f: () => {
          setOpenedModalConfirm(true);
          setMesageConfirm("Deseja mesmo excluir esse projeto?");
          setFunctionOnConfirm({ f: deleteFunction });
        },
      })
    );
    setOnSubmitFunction({
      f: onSubmitUpdateWorkFunction,
    });
    setSchema(schemaUpdateWork);
  }

  function onSubmitUpdateWorkFunction(data) {
    requisition(
      data,
      work.id,
      "Projeto alterado com sucesso!",
      "Ocorreu algum erro, tente novamente",
      "works",
      "put"
    );
  }

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  function logout() {
    localStorage.removeItem("@KenzieHub:token");
    localStorage.removeItem("@KenzieHub:idUser");
    setAuthenticated(false);
  }

  async function requisition(
    data,
    id,
    messageSuccess,
    messageError,
    endpoint,
    method
  ) {
    const result = await axios[method](
      `https://kenziehub.herokuapp.com/users/${endpoint}${
        !!id ? `/${id}` : ""
      }`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then(res => {
        loadUserInfo();
        showSuccess(messageSuccess);

        setOpenedForm(false);

        return res.data;
      })
      .catch(err => {
        showError(messageError);
      });

    return result;
  }

  async function requisitionProfile(
    data,
    messageSuccess,
    messageError,
    endpoint
  ) {
    const result = await axios
      .put(`https://kenziehub.herokuapp.com/${endpoint}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        loadUserInfo();
        showSuccess(messageSuccess);

        setOpenedForm(false);

        return res.data;
      })
      .catch(err => {
        showError(messageError);
      });

    return result;
  }

  const onSubmitUpdateProfile = data => {
    requisitionProfile(
      data,
      "Perfil alterado com sucesso!",
      "Ocorreu algum erro, tente novamente",
      "profile"
    );
  };

  const onSubmitUpdateTechFunction = data => {
    requisition(
      data,
      tech.id,
      "Tecnologia alterada com sucesso!",
      "Ocorreu algum erro, tente novamente",
      "techs",
      "put"
    );
  };

  async function onSubmitRegisterWorkFunction(data) {
    const result = await requisition(
      data,
      undefined,
      "Projeto adicionado com sucesso!",
      "Ocorreu algum erro, tente novamente",
      "works",
      "post"
    );
    if (result) {
      setWorks([...works, result]);
    }
  }

  function openModalAdd() {
    setOpenedForm(true);
    setTittleForm("Cadastrar tecnologia");
    setFieldsInputs(fieldsRegisterTech);
    setButtonForm(buttonsRegisterTech);
    setOnSubmitFunction({
      f: onSubmitRegisterTechFunction,
    });
    setSchema(schemaRegisterTech);
  }

  function openModalWorkAdd() {
    setOpenedForm(true);
    setTittleForm("Cadastrar projeto");
    setFieldsInputs(fieldsRegisterWork);
    setButtonForm(buttonsRegisterWork);
    setOnSubmitFunction({
      f: onSubmitRegisterWorkFunction,
    });
    setSchema(schemaRegisterWork);
  }

  function openModalUpdate() {
    setOpenedForm(true);
    setTittleForm("Tecnologia detalhes");
    const fields = fieldsUpdateTech(tech);
    const index = fields[1].options.findIndex(
      item => item.text === tech.status
    );
    fields[1].options[index].value = "";
    setFieldsInputs(fields);

    const buttons = buttonsUpdateTech({
      f: () => {
        setOpenedModalConfirm(true);
        setMesageConfirm("Deseja mesmo excluir essa tecnologia?");
        setFunctionOnConfirm({ f: deleteFunction });
      },
    });
    setButtonForm(buttons);
    setOnSubmitFunction({
      f: onSubmitUpdateTechFunction,
    });
    setSchema(schemaUpdateTech);
  }

  function openModalUpdateProfile() {
    setOpenedForm(true);

    setTittleForm("Atualizar perfil");

    setFieldsInputs(fieldsUpdateProfile(user));

    setButtonForm(buttonsUpdateProfile);

    setOnSubmitFunction({
      f: onSubmitUpdateProfile,
    });
    setSchema(schemaUpdateProfile);
  }

  if (techs.length < 1) {
    return (
      <LoadingSpinner
        width={"200px"}
        height={"200px"}
        borderColor="var(--color-primary)"
      />
    );
  }

  return (
    <AnimatedPage>
      <PageHome>
        <NavBar theme={theme}>
          <h1
            className="logo__navbar"
            title="Click to change theme"
            onClick={() => setThemeIsDefault(!themeIsDefault)}
          >
            DevHouse
          </h1>
          {!themeIsDefault ? (
            <FaSun
              size={28}
              color="#F1FA8C"
              style={{ cursor: "pointer" }}
              onClick={() => setThemeIsDefault(true)}
            />
          ) : (
            <FaMoon
              size={22}
              color="#F1FA8C"
              style={{ cursor: "pointer" }}
              onClick={() => setThemeIsDefault(false)}
            />
          )}
          <div>
            <Button
              fontSize="1.3rem"
              padding="0.2rem 0.5rem"
              onClick={() => setOnTechnologies(true)}
              bgColor={onTechnologies ? "var(--color-primary)" : null}
            >
              <FaLaptopCode title="Your Stack" />
            </Button>
            <Button
              fontSize="1.3rem"
              padding="0.2rem 0.5rem"
              onClick={() => setOnTechnologies(false)}
              bgColor={!onTechnologies ? "var(--color-primary)" : null}
            >
              <FaFileCode title="Your Projects" />
            </Button>
            <Button
              fontSize="1.3rem"
              padding="0.2rem 0.5rem"
              onClick={() => {
                setOpenedModalConfirm(true);
                setMesageConfirm("Deseja mesmo sair?");
                setFunctionOnConfirm({ f: logout });
              }}
            >
              <MdLogout title="Logout" />
            </Button>
          </div>
        </NavBar>

        <Header>
          {" "}
          <div>
            {user.avatar_url !== null ? (
              <img
                onClick={() => setThemeIsDefault(!themeIsDefault)}
                src={user.avatar_url}
                alt={user.name}
              />
            ) : (
              <FaUserCircle
                onClick={openModalUpdateProfile}
                style={{ cursor: "pointer" }}
                size={77}
                title="Edit profile"
              />
            )}
          </div>
          <h2>Olá, {user.name}! </h2>
          <p>{user.course_module}</p>
          <p>{user.bio}</p>{" "}
        </Header>

        <main>
          <Main>
            {onTechnologies ? (
              <ContentTechnologies
                openModalAdd={openModalAdd}
                techs={techs}
                setTech={setTech}
              />
            ) : (
              <ContentWorks
                setMesage={setMesage}
                setOpenedModal={setOpenedModal}
                openModalAdd={openModalWorkAdd}
                works={works}
                setWork={setWork}
              />
            )}
          </Main>
        </main>

        <ToastTechnologie />

        {openedForm ? (
          <FormModal
            setTech={onTechnologies ? setTech : setWork}
            onSubmitFunction={onSubmitFunction}
            schema={schema}
            buttonForm={buttonForm}
            tittle={tittleForm}
            fieldsInputs={fieldsInputs}
            opened={openedForm}
            setOpened={setOpenedForm}
          />
        ) : null}

        {openedModalConfirm ? (
          <ModalConfirmation
            mesage={mesageConfirm}
            setOpened={setOpenedModalConfirm}
            opened={openedModalConfirm}
            buttons={[
              {
                title: "Não",
                onClick: () => setOpenedModalConfirm(false),
              },
              {
                bgColor: "var(--color-primary)",
                title: "Sim",
                type: "button",
                onClick: functionOnConfirm.f,
              },
            ]}
          />
        ) : null}

        {openedModal ? (
          <ModalC
            mesage={mesageModal}
            opened={openedModal}
            setOpenedModal={setOpenedModal}
          />
        ) : null}
      </PageHome>

      <Footer theme={theme} />
    </AnimatedPage>
  );
}

export default Home;
