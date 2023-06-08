import { FaPlus, FaEdit } from "react-icons/fa";
import Button from "../../components/Button";
import CardTech from "../CardTech";


function ContentTechnologies({openModalAdd, techs, setTech}) {

  
    return <>
        <div>
            <h3>Technologies</h3>
            <Button onClick={openModalAdd} padding="0.2rem 0.5rem">
              <FaPlus />
            </Button>
          </div>

        {techs.length>0 ? 
          <ul>
            {techs.map((tech) => 

            <CardTech key={tech.id} tech={tech} setTech={setTech}/>
           
           )}
         
       </ul>
          
        : 
        <p>Adicione alguma tecnologia</p>  }
          

    </>

          
    
}

export default ContentTechnologies