import styled from "styled-components";

export const Modal = styled.div`

    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: rgb(255,255,255,0.4);

    display: flex;
    justify-content: center;
    align-items: center;


    >div {
        background-color: ${(props) => props.theme.grey3};
        border-radius: 20px;
        position: relative;
    }

    >div::after {
        content: '';
        width: 0;
      height: 0;
      position: absolute;
      right: 18px;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 15px solid ${(props) => props.theme.grey3};

    }

    >div>div {
        padding: 0.5rem 1rem ;
    }
    

`

export const MesageModal = styled.div`
    max-width: 90vw;

    >p {
        color: 15px solid ${(props) => props.theme.grey0};
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
`

export const HeaderModal = styled.div`

    padding: 1rem 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    //background-color: ${(props) => props.theme.grey2};

    p {
        cursor: pointer;
        font-size: 0.7rem;
        color: red;
    }
`
