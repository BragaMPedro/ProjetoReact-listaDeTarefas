import { ToDoContext } from "../../context/ToDoContext"
import { Container } from "./listaTarefasStyle"
import { Tarefa } from "../Tarefas/Tarefa"
import { Salvar } from "../SaveButton/Save"
import { Pen, PlusCircle } from "phosphor-react"
import { useState, useContext } from "react"
import { TarefaInput } from "../InputTarefa/TarefaInput"

export function Lista({ lista }) {
   const { tarefasView, setTarefasView } = useContext(ToDoContext);

   const [isEditable, setIsEditable] = useState(false);
   const [addTarefa, setAddTarefa] = useState(false);

   function handleButtonEditable(){
        setIsEditable(current => !current)
        setAddTarefa(false)
   }

   function handleButtonAdd(){
        setIsEditable(false)
        setAddTarefa(current => !current)
   }

   function salvarNovaTarefa(nomeTarefa) {
      const NovaTarefa = {
         id: Math.random(),
         nome: nomeTarefa,
      }
      
      tarefasView.push(NovaTarefa)
      const tarefasAtualizadas = tarefasView.filter(tarefa => tarefa !== null)
      setTarefasView(tarefasAtualizadas);
      
      setAddTarefa(false);
   }

   function salvarAlteracoes() {
      setIsEditable(false)
   }

   function deletarTarefa(id) {
      const tarefasSemDeletada = tarefasView.filter(tarefa => tarefa.id !== id);
      setTarefasView(tarefasSemDeletada);
   }

   return (
      <Container>
         <table>
            <thead>
               <tr>
                  <th>
                     {lista.nome}
                     <div>
                        <Pen className="btn-acao" onClick={handleButtonEditable} />
                        <PlusCircle className="btn-acao" onClick={handleButtonAdd} />
                     </div>
                  </th>
               </tr>
            </thead>
            <tbody>
               {tarefasView.map(tarefa => (
                  <tr key={tarefa.id}>
                     <td colSpan="3">
                        <Tarefa tarefa={tarefa} edit={isEditable} deletarTarefa={deletarTarefa} />
                     </td>
                  </tr>
               ))}
            </tbody>
            {addTarefa ? ( <TarefaInput salvar={salvarNovaTarefa}/> ) : null}

            {isEditable ? <Salvar salvarAlteracoes={salvarAlteracoes} /> : null}
         </table>
      </Container>
   )
}
