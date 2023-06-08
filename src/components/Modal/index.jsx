
import { AiOutlineClose } from "react-icons/ai";
import AnimatedModal from "../AnimatedModal";
import { HeaderModal, MesageModal, Modal } from "./styles";

function ModalC ({
  opened,
  setOpenedModal,
  mesage
  
}) {

  function close() {
    
    setOpenedModal(false)
  }

  
    return (
      <Modal onClick={() => close()}>
        <AnimatedModal>

          <MesageModal onClick={(e) => e.stopPropagation()}>{mesage}</MesageModal>
          <HeaderModal onClick={(e) => e.stopPropagation()}>
            <p onClick={() => close()}>FECHAR</p>
          </HeaderModal>
            
            
         
        </AnimatedModal>
      </Modal>
    );

}

export default ModalC;
