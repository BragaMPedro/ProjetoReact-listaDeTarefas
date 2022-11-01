import styled from "styled-components"

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   padding: 0.3rem 1rem;

   .tarefa{
      margin: 0 1rem;
   }

   input{
      font-size: 1rem;
      background-color: transparent;
      border-radius: 15px;
      box-shadow: 0.2rem 0.2rem 0.5rem 0.1rem #09091931 inset;
      height: 2rem;
      width: 46%;
      padding: 0 1rem;

      ::placeholder{
         opacity: 0.5;
      }
   }

   .tarefa-concluida {
      text-decoration: line-through;
      margin: 0 1rem;
   }

   .btn-concluido,
   .btn-deletar {
      margin: 0 1rem;
      padding: 0.2rem;
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
   }

   .btn-concluido-checked {
      margin: 0 1rem;
      padding: 0.2rem;
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      border: 1px solid #16276c;
      background-color: #4060e0;
      color: aliceblue;
      cursor: pointer;
   }

   .btn-concluido:hover,
   .btn-deletar:hover {
      border: 1px solid #16276c;
      background-color: #4060e0;
      color: aliceblue;
      transition-duration: 0.5s;
      cursor: pointer;
   }
`
