import styled from "styled-components"

export const Container = styled.tfoot`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.5rem;


   tr > td {
      cursor: pointer;
      border-radius: 30px;
      padding: 0.5rem 3rem;
      border: 1px solid #16276c;
      background-color: #4060e0;
      color: aliceblue;
   }

   td:hover{
      filter: brightness(0.8);
   }
`
