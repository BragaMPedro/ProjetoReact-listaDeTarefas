import { ToDoContext } from "../../context/ToDoContext";
import { Container } from "./listaTarefasStyle";
import { Tarefa } from "../Tarefas/Tarefa";
import { Salvar } from "../SaveButton/Save";
import { Pen, PlusCircle } from "phosphor-react";
import { useState, useContext } from "react";

export function Lista({lista}){
    const { tarefasView, setTarefasView } = useContext(ToDoContext);
    const [isEditable, setIsEditable] = useState(false)

    function deletarTarefa(id){
        const tarefasSemDeletada = tarefasView.filter((tarefa) => tarefa.id !== id);
        setTarefasView(tarefasSemDeletada);
    }

    function handleNovaTarefa(){
        
    }
    
    function savarAlteracoes(){
        setIsEditable(false);
    }
    
    function handleEditarlista(){
        setIsEditable(true);
    }

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>
                            <div>
                                {lista.nome}
                            </div>    
                            <div>
                                <Pen className="btn-acao" onClick={handleEditarlista}/>
                                <PlusCircle className="btn-acao" onClick={handleNovaTarefa}/>
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
                { isEditable ? <Salvar salvarAlteracoes={savarAlteracoes}/> : null}
            </table>
        </Container>
    )
}