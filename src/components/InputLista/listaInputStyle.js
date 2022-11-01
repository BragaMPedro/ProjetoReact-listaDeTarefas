import styled from "styled-components"

export const Container = styled.form`
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-radius: 30px;
   border: 1px solid #16276c;
   background-color: #4060e0;
   height: fit-content;
   min-height: 2.5rem;
   padding: 0.2rem 0.5rem;
   margin: 0.6rem 0;
   box-shadow: 0.05rem 0 0.4rem #090919 inset;
   filter: brightness(0.9);

   input {
      width: 100%;
      height: 100%;
      background-color: transparent;
      text-align: center;
      color: aliceblue;

      ::placeholder {
         color: aliceblue;
         opacity: 0.8;
      }
   }

   button {
      height: 100%;
      width: 11.5%;
      margin: 0 0.5rem;
      margin-right: 0.1rem;
      color: aliceblue;
      background-color: transparent;

      :hover {
          -webkit-animation: spin 4s linear infinite;
          -moz-animation: spin 4s linear infinite;
          animation: spin 4s linear infinite;
      }

      @-moz-keyframes spin {
         100% {
            -moz-transform: rotate(360deg);
         }
      }
      @-webkit-keyframes spin {
         100% {
            -webkit-transform: rotate(360deg);
         }
      }
      @keyframes spin {
         100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
         }
      }
   }

   svg {
      width: 100%;
      height: 100%;
   }
`
