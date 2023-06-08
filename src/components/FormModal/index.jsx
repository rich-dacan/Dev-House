import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import AnimatedModal from "../AnimatedModal";
import Button from "../Button";
import InputContainer from "../InputContainer";
import { FieldModal, HeaderModal, Modal } from "./styles";

function FormModal({
  tittle,
  onSubmitFunction,
  schema,
  fieldsInputs,
  opened,
  setOpened,
  buttonForm,
  setTech,

}) {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  function close() {
    setTech()
    setOpened(false)
  }

  if (opened) {
    return (
      <Modal onClick={() => close()}>
        <AnimatedModal>
          <HeaderModal onClick={(e) => e.stopPropagation()}>
            {tittle}
            <AiOutlineClose onClick={() => close()} />
          </HeaderModal>

          <form onClick={(e) => e.stopPropagation()}
            action=""
            onSubmit={(e) => {
              handleSubmit(onSubmitFunction.f)(e);
            }}
          >
            {fieldsInputs.map(({ name, label, field, options, value, defaultValue }, i) => (
              <InputContainer
                value={value}
                key={i}
                defaultValue={defaultValue}
                error={errors[name]?.message} register={name && register}
                name={name && name}

                label={label}
              >
                {field === "select" && (
                  <select {...register(name)} defaultValue=''>
                    {options.map((option, i) => (
                      <option value={option.value} disabled={option.value===''} key={i}>{option.text}</option>
                    ))}
                  </select>
                )}
              </InputContainer>
            ))}
            <FieldModal>
              {buttonForm.map((button, i) => (
                <Button
                  onClick={button.onClick && button.onClick}
                  type={button.type}
                  bgColor={button.bgColor}
                  key={i}
                >
                  {button.title}
                </Button>
              ))}
            </FieldModal>
          </form>
        </AnimatedModal>
      </Modal>
    );
  }
}

export default FormModal;
