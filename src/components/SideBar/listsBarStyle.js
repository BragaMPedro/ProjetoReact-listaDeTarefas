import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33%;
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    scroll-behavior: smooth;
    overflow-y: scroll;
    padding: 2rem 1rem;
    background-color: azure;
    box-shadow: 0.7rem 0 3rem  #09091961;

`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    
    
    button{
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        padding: 0.3rem;
        border: 3px solid #16276c80;
        box-shadow: 0.05rem 0 0.4rem #090919 inset;
        font-size: 110%;
    }

    button:hover{
        border: 1px solid #16276c;
        background-color: #4060e0;
        color: aliceblue;
        transition-duration: 0.5s;
    }
`;

export const SuasListas = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 2rem 0;

    .btn-lista{
        height: fit-content;
        min-height: 2.5rem;
        padding: 0.5rem 1rem;
        margin: 0.6rem 0;
        text-align: center;
        border-radius: 30px;
        border: 1px solid #16276c;
        background-color: #4060e0;
        color: aliceblue;
    }

    .btn-lista:hover{
        border: 5px double;
        transform: scale(1.1);
        box-shadow: 0.05rem 0 0.4rem #090919 inset;
        filter: brightness(1.2);
        transition-duration: 0.5s;
        cursor: pointer;
    }
    
    .btn-lista-selected{
        height: fit-content;
        min-height: 2.5rem;
        padding: 0.5rem 1rem;
        margin: 0.6rem 0;
        text-align: center;
        border: 5px double;
        border-radius: 30px;
        background-color: #4060e0;
        color: aliceblue;
        box-shadow: 0.05rem 0 0.4rem #090919 inset;
        filter: brightness(0.9);
        cursor: pointer;
    }
`;