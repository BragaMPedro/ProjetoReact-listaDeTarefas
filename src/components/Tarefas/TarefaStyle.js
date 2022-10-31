import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    .tarefa-concluida{
        text-decoration: line-through;
    }
    
    .btn-concluido{
        border-radius: 50%;
    }
    .btn-concluido:hover{
        border-radius: 50%;
        border: 1px solid #16276c;
        background-color: #4060e0;
        color: aliceblue;
        transition-duration: 0.5s;
        cursor: pointer;
    }
    
    .btn-concluido-checked{
        border-radius: 50%;
        border: 1px solid #16276c;
        background-color: #4060e0;
        color: aliceblue;
        cursor: pointer;
    }
`;