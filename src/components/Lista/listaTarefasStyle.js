import styled from "styled-components"

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   table {
      width: 80%;
      border-radius: 15px;
      margin: 2rem 1rem;
      box-shadow: 0.2rem 0 3rem #09091961;
      background-color: aliceblue;

      thead {
         border-bottom: 1px solid #090919;
         margin-bottom: 0.2vh;

         div{
            font-size: 1.5rem;
         }

         th {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0.5rem 1rem;

            .btn-acao {
               margin: 0 1rem;
               padding: 0.2rem;
               height: 2rem;
               width: 2rem;
               border-radius: 50%;
            }

            .btn-acao:hover {
               border: 1px solid #16276c;
               background-color: #4060e0;
               color: aliceblue;
               transition-duration: 0.5s;
               cursor: pointer;
            }
         }
      }

      tbody {
         padding: 1rem;
         filter: brightness(0.8);

         td{
            background-color: aliceblue;
         }
      }

   }
`;
