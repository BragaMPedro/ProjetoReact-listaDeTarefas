import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    div{
        margin: 0 2rem;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 77%;
    height: 100vh;
    padding: 2rem 1rem;

    div{
        text-align: center;
        height: 20%;
    }

    Lista{
        height: 80%;
    }
`;