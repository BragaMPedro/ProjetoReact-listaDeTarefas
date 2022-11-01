import { Container } from "./saveStyle"

export function Salvar({salvarAlteracoes}){

    function handleSalvarAlteracoes(event){
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