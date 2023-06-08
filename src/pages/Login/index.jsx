import InputContainer from "../../components/InputContainer";
import { AnimatedContainer, PageLogin, HeaderLogin } from "./styles";
import Logo from "../../images/Logo.svg";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validation";
import axios from "axios"
import { MdEmail, MdLock } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AnimatedPage from "../../components/AnimatedPage";


function Login({ authenticated, setAuthenticated }) {

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const history = useHistory()


  const onSubmitFunction = ({email,password}) => {

    let data = {email, password}

    axios.post('https://kenziehub.herokuapp.com/sessions', data).then((res) => {

        toast.success('Login feito com sucesso!',{
          autoClose:1000,
          theme: "dark"
        })

        const { token } = res.data
        const { id} = res.data.user

        localStorage.setItem("@KenzieHub:token", JSON.stringify(token))
        localStorage.setItem("@KenzieHub:idUser", JSON.stringify(id))

        setTimeout(() => {
          setAuthenticated(true)
          history.push('/home')
        }, 2000);
    }).catch(() => {

      toast.error("Não foi possível realizar o login, verifique email e senha", {
        autoClose:5000,
        theme: "dark"
      })
      
    })
   
  }

  if(authenticated) {
    return <Redirect to='/home'/>
}

  return (
    <AnimatedPage>
    <PageLogin>
      <ToastContainer/>
      <HeaderLogin>
        <img src={Logo} alt="logo" />
      </HeaderLogin>
      <AnimatedContainer>
        <form action="" onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Login</h2>
          
          
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


          <Button
            bgColor={
              isValid
                ? "var(--color-primary)"
                : "var(--color-primary-negative)"
            }
            padding="1.1rem"
            valid={isValid}
          >
            Entrar
          </Button>
          <p>Ainda não possui uma conta?</p>
          <Link to="/register">
          <Button bgColor="var(--grey-1)">Cadastre-se</Button>
        </Link>
        </form>
      </AnimatedContainer>
    </PageLogin>
    </AnimatedPage>
  );
}

export default Login;