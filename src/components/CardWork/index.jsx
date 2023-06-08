import { useEffect, useState } from "react";
import { Work, ImagePrincipal } from "./styles";
import { BsGithub } from "react-icons/bs";
import { FaLaptopCode, FaFileCode, FaGithubSquare, FaGithubAlt, FaEdit } from "react-icons/fa";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { GiTechnoHeart } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
function CardWork({work, setWork, setOpenedModal, setMesage}) {

  const [link, setLink] = useState('')

  useEffect(() => {

    if(work.deploy_url.includes('http')) {
      setLink(work.deploy_url)
    } else {
  
      setLink(`https://${work.deploy_url}`)
  
    }

  }, [])
    
    return (
        <Work>
          <ImagePrincipal>

            <AiOutlineCodeSandbox/>
          </ImagePrincipal>
             <div>
             <h3>{work.title}</h3>
             <p onClick={() => {
                 setOpenedModal(true)
                 setMesage(<p>{work.description}</p>)
               }}>Ver descrição</p>
             </div>

             <div>
               
               <a href={link} target="_blank" rel="noreferrer" ><BsGithub/></a>
               <FaEdit className="edit" onClick={() => {
              setWork(work)
            }}/>
               
             </div>
        </Work>
    )
}

export default CardWork