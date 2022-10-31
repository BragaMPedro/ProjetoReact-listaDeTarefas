import { Container } from "./listaTarefasStyle";
import { Pen, CheckCircle } from "phosphor-react";

export function Lista({lista}){

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>{lista.nome}</th>
                        {/* <th>{lista.dataCriacao}</th> */}
                        <th>
                            <Pen/>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {lista.tarefas.map(tarefa => (
                        <tr key={tarefa.id}>
                            <td>{tarefa.nome}</td>
                            <td>Editar</td>
                            <td>
                                <CheckCircle/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}