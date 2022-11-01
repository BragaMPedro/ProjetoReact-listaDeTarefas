import { Container } from "./saveStyle"

export function Salvar({salvarAlteracoes}){

    function handleSalvarAlteracoes(){
        salvarAlteracoes();
    }

    return(
            <Container>
                <tr>
                    <td onClick={handleSalvarAlteracoes}>
                        Salvar
                    </td>
                </tr>
            </Container>
    )
}