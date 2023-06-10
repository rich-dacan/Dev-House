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
    }

    >div>div {
        padding: 0.5rem 1rem ;
    }
    

`

export const MesageModal = styled.div`
    max-width: 90vw;
`

export const HeaderModal = styled.div`

    padding: 1rem 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    //background-color: ${(props) => props.theme.grey2};

    svg {
        cursor: pointer;
    }
`

export const FieldModal = styled.div`
    padding: 1rem 0;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
     
`