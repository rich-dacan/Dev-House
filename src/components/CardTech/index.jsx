import {  FaEdit } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import { ImagePrincipal, Tech } from "./styles";

function CardTech({tech, setTech}) {
    
    return (
        <Tech>
            <ImagePrincipal>

            <GiTechnoHeart/>
            </ImagePrincipal>
             <div>
             <h3>{tech.title}</h3>
            <p>{tech.status}</p>
             </div>
             <div>
               <FaEdit className="edit" onClick={() => {
              setTech(tech)
            }}/>
               
             </div>
        </Tech>
    )
}

export default CardTech