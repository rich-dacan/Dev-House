import InputContainer from "../../components/InputContainer";
import { AnimatedContainer, PageRegister, HeaderRegister } from "./styles";
import Logo from "../../images/Logo.svg";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validation";
import axios from "axios"
import { MdEmail, MdLock, MdPerson, MdViewModule, MdComment, MdPermContactCalendar } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
import AnimatedPage from "../../components/AnimatedPage";


function Register({ authenticated, setAuthenticated }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const history = useHistory()


  const onSubmitFunction = ({bio, contact, course_module, email, name, password}) => {

    let data = {bio, contact, course_module, email, name, password}

    axios.post('https://kenziehub.herokuapp.com/users', data)
    .then((res) => {
      axios.post('https://kenziehub.herokuapp.com/sessions', {email, password})
      .then((res) => {
        toast.success('Cadastro feito com sucesso!',{
          autoClose:1000,
          theme: "dark"
        })
        setAuthenticated(true)

        const { token } = res.data
        const { id} = res.data.user

        localStorage.setItem("@KenzieHub:token", JSON.stringify(token))
        localStorage.setItem("@KenzieHub:idUser", JSON.stringify(id))
        

        setTimeout(() => {
          return history.push('/home')
        }, 1200);

      }).catch((err) => console.log(err));
    })
    .catch((err) => {
      setAuthenticated(false)
      if(err.response.data.message.includes('Email')) {
        toast.error("Este email já foi cadastrado, tente outro", {
          autoClose:5000,
          theme: "dark",
        })

      } else {
        toast.error("Não foi possível realizar o cadastro", {
          theme: "dark"
        })
      }
      
    })
    
  };

  return (
    <AnimatedPage>
    <PageRegister>
      <ToastContainer/>
      <HeaderRegister>
        <img src={Logo} alt="logo" />
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </HeaderRegister>
      <AnimatedContainer>
        <form action="" onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Crie sua conta</h2>
          <p>Rapido e grátis, vamos nessa</p>
          <InputContainer
            delay="10ms"
            label="Nome*"
            placeholder="Digite aqui seu nome"
            register={register}
            name="name"
            error={errors.name?.message}
            Icon={MdPerson}
          />
          
          <InputContainer
          delay="200ms"
            label="Email*"
            placeholder="Digite aqui seu email"
            register={register}
            name="email"
            error={errors.email?.message}
            Icon={MdEmail}
          />
          
          <InputContainer
          delay="300ms"
            label="Senha*"
            placeholder="Digite aqui sua senha"
            register={register}
            name="password"
            type="password"
            error={errors.password?.message}
            Icon={MdLock}
          />
          
          <InputContainer
          delay="400ms"
            label="Confirmar senha*"
            placeholder="Digite novamente sua senha"
            register={register}
            name="confirmPassword"
            type="password"
            error={errors.confirmPassword?.message}
            Icon={MdLock}
          />
          
          <InputContainer
          delay="500ms"
            label="Bio"
            placeholder="Fale sobre você*"
            register={register}
            name="bio"
            error={errors.bio?.message}
            Icon={MdComment}
          />
          <InputContainer
          delay="600ms"
            label="Contato"
            placeholder="Opção de contato"
            register={register}
            name="contact"
            error={errors.contact?.message}
            Icon={MdPermContactCalendar}
          />
          <InputContainer Icon={MdViewModule} label="Selecionar módulo*" delay="700ms" error={errors.course_module?.message}>
            <select {...register("course_module")} defaultValue=''>
              <option value="" disabled={true}>Escolha um módulo</option>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo
              </option>
              <option value="Segundo Módulo (Frontend avançado)">
                Segundo módulo
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Terceiro módulo
              </option>
            </select>
          </InputContainer>
          


          <Button
            bgColor={
              isValid
                ? "var(--color-primary)"
                : "var(--color-primary-negative)"
            }
            padding="1.1rem"
            valid={isValid}
          >
            Cadastrar
          </Button>
        </form>
      </AnimatedContainer>
    </PageRegister>
    </AnimatedPage>
  );
}

export default Register;
