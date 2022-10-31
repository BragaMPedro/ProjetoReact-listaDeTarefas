import { Container } from "./listaTarefasStyle";
import { Tarefa } from "../Tarefas/Tarefa";
import { Salvar } from "../SaveButton/Save";
import { Pen, PlusCircle } from "phosphor-react";
import { useState } from "react";

export function Lista({lista}){
    const [isEditable, setIsEditable] = useState(false)
    const [tarefas, setTarefas] = useState(lista.tarefas)

    function deletarTarefa(id){
        const tarefasSemDeletada = tarefas.filter((tarefa) => tarefa.id !== id);

        setTarefas(tarefasSemDeletada);
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
                        <th contentEditable={isEditable}>
                            <div>
                                {lista.nome}
                            </div>    
                            <div>
                                <Pen className="btn-acao" onClick={handleEditarlista}/>
                                <PlusCircle className="btn-acao"/>
                            </div>
                        </th>
 
                    </tr>
                </thead>
                <tbody>
                    {tarefas.map(tarefa => (
                        <tr key={tarefa.id}>
                            <td contentEditable={isEditable} colSpan="3">
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