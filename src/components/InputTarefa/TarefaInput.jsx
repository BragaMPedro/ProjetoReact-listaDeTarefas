import { useState } from "react";
import { Container } from "./tarefaInputStyle"

export function TarefaInput({salvar}){

    const [newTarefa, setNewTarefa] = useState("");

   function handleNewTarefaInput(event) {
      setNewTarefa(event.target.value);
   }

    function handleSubmit(){
        salvar(newTarefa);
    }

    return(
        <Container>
            <tr>
                <td>
                    <form onSubmit={handleSubmit}>
                        <input type="text" autoFocus onChange={handleNewTarefaInput} placeholder="Sua Nova Tarefa aqui" />
                        <button type="submit">Adicionar</button>
                    </form>
               </td>
            </tr>
        </Container>
    )
}