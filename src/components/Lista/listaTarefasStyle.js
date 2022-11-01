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

         th,
         input {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0.5rem 1rem;
            font-size: 1.5rem;

            input {
               background-color: transparent;
               border-radius: 15px;
               box-shadow: 0.2rem 0.2rem 0.5rem 0.1rem #09091931 inset;
            }

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
         filter: brightness(0.85);

         tr {
            background-color: aliceblue;
            
            &:last-child td {
               background-color: aliceblue;
               border-bottom-left-radius: 15px;
               border-bottom-right-radius: 15px;
            }
         }
      }
   }
`
