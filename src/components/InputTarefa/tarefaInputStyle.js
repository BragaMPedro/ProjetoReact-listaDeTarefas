import styled from "styled-components"

export const Container = styled.tfoot`
   form {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 1rem;

      input {
         font-size: 1rem;
         background-color: transparent;
         border-radius: 15px;
         box-shadow: 0.2rem 0.2rem 0.5rem 0.1rem #09091931 inset;
         height: 2rem;
         margin: 0 0.5rem;
         padding: 0 0.5rem;

         ::placeholder {
            opacity: 0.5;
         }
      }

      button {
         text-align: center;
         padding: 0.5rem 1rem;
         border-radius: 30px;
         border: 2px solid #16276c;
         color: #16276c;
         font-weight: bold;
      }

      button:hover {
         color: aliceblue;
         background-color: #4060e0;
         box-shadow: 0.05rem 0 0.4rem #090919 inset;
         transition-duration: 0.5s;
         cursor: pointer;
      }
   }
`
