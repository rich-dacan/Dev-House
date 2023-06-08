
import { AiOutlineClose } from "react-icons/ai";
import AnimatedModal from "../AnimatedModal";
import Button from "../Button";
import { FieldModal, HeaderModal, MesageModal, Modal } from "./styles";

function ModalConfirmation({
  opened,
  setOpened,
  buttons,
  mesage
  
}) {

  function close() {
    
    setOpened(false)
  }

  if (opened) {
    return (
      <Modal onClick={() => close()}>
        <AnimatedModal>
          <HeaderModal onClick={(e) => e.stopPropagation()}>
            <AiOutlineClose onClick={() => close()} />
          </HeaderModal>

          <MesageModal onClick={(e) => e.stopPropagation()}>{mesage}</MesageModal>
            
            <FieldModal onClick={(e) => e.stopPropagation()}>
              {buttons.map((button, i) => (
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
         
        </AnimatedModal>
      </Modal>
    );
  }
}

export default ModalConfirmation;
