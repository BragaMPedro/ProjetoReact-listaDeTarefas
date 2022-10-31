import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    
    table{
        width: 80%;
        height: fit-content;
        max-height: 80%;
        border-radius: 15px;
        margin: 2rem 1rem;
        box-shadow: 0.2rem 0 3rem  #09091961;
        background-color: aliceblue;
        
        thead{
            border-bottom: 1px solid #090919;
            margin-bottom: 0.2vh;

            tr, th{
                padding: 0.5rem;
            }
        }
        
        tbody{
            padding: 0.5rem;
            background-color: aliceblue;
            filter: brightness(0.8);

            tr{
              row-gap: 0%;
            }

            td{
                padding: 0.3rem;
            }
        }
    }

    
`;