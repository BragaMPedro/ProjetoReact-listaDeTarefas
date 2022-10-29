import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33%;
    height: 100vh;
    padding: 2rem 1rem;
    background-color: azure;
    box-shadow: 0.7rem 0 3rem  #09091961;

`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
    
    button{
        border-radius: 50%;
        width: 2rem;
        padding: 0.3rem;

    }
`;

export const SuasListas = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 2rem 0;

    span{
        height: fit-content;
        min-height: 2.5rem;
        padding: 0.5rem 1rem;
        margin: 0.6rem 0;
        text-align: center;
        border-radius: 10px;
        border: 1px solid #16276c;
        background-color: #4060e0;
        color: aliceblue;
    }
    `;