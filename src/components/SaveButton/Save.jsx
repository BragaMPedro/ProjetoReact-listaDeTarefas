import { Container } from "./saveStyle"

export function Salvar({salvarAlteracoes}){

    function handleSalvarAlteracoes(){
        salvarAlteracoes();
    }

    return(
        <Container>
            <tfoot>
                <tr>
                    <td onClick={handleSalvarAlteracoes}>
                        Salvar
                    </td>
                </tr>
            </tfoot>
        </Container>
    )
}