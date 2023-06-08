import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const Toast = styled(ToastContainer)`
    .Toastify--animate-icon {
        display: none;
    }

    .Toastify__toast-body > div:nth-child(2){
       display: flex;
       gap: 1rem;
       align-items: center;

       .computer {
           width: 10rem;
       }
    }
`