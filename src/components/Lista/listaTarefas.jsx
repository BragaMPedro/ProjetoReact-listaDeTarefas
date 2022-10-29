import { Container } from "./listaTarefasStyle";

export function Lista({lista}){

    return(
        <Container>
            <table>
                <thead>
                    <th>{lista.nome}</th>
                    <th>{lista.dataCriacao}</th>
                    <th>Editar</th>
                </thead>
                <tbody>
                    {lista.tarefas.map(tarefa => (
                        <tr key={tarefa.id}>
                            <td>{tarefa.nome}</td>
                            <td>Editar</td>
                            <td>Concluída</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}