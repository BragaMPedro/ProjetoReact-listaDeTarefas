import { Container } from "./listaTarefasStyle";
import { Tarefa } from "../Tarefas/Tarefa";
import { Pen, CheckCircle, PlusCircle } from "phosphor-react";

export function Lista({lista}){

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>{lista.nome}</th>
                        <th>
                            <Pen/> {/* TODO Modal Renomear/Excluir Lista */}
                        </th>
                        <th>
                            <PlusCircle/>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {lista.tarefas.map(tarefa => (
                        <tr key={tarefa.id}>
                            <td>
                                <Tarefa tarefa={tarefa} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}