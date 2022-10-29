import { Container, Content } from "./homeStyle";
import { Lista } from "../../components/Lista/listaTarefas";
import { Indice } from "../../components/SideBar/ListsBar";

export function Home(){
    return(
        <Container>

            <Indice/>

            <Content>
                <div>
                    <h1>Bem vindo ao Listeiro</h1>
                    <h1>Sua lista aqui</h1>
                </div>
                
                <Lista/>

            </Content>
        </Container>
    )
}