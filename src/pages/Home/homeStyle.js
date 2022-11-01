import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 77%;
    height: 100vh;
    padding: 2rem 1rem;
    overflow-y: scroll;

    .title{
        margin-top: 5vh;
        text-align: center;
        height: 20%;
    }

    Lista{
        height: 80%;
    }
`;