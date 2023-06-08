import { FaPlus} from "react-icons/fa";
import Button from "../../components/Button";
import CardWork from "../CardWork";




function ContentWorks({openModalAdd, works, setWork, setOpenedModal, setMesage}) {

  
    return <>
        <div>
            <h3>Projetos</h3>
            <Button onClick={openModalAdd} padding="0.2rem 0.5rem">
              <FaPlus />
            </Button>
          </div>

        {works.length>0 ? 
          <ul>
            {works.map((work) => 

            <CardWork setMesage={setMesage} setOpenedModal={setOpenedModal} key={work.id} work={work} setWork={setWork}/>
           
           )}
         
       </ul>
          
        : 
        <p>Adicione algum projeto</p>  }
          

    </>

          
    
}

export default ContentWorks