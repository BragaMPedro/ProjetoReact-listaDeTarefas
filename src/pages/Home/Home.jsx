import { Container, Content } from "./homeStyle";
import { ToDoContext } from "../../context/ToDoContext";
import { useContext } from "react";
import { Lista } from "../../components/Lista/listaTarefas";
import { ListsBar } from "../../components/SideBar/ListsBar";

export function Home(){
    const { selected } = useContext(ToDoContext);

    return(
        <Container>

            <ListsBar/>

            <Content>
                <div className="title">
                    <h1>Bem vindo ao Listeiro</h1>
                    <h1>Sua lista aqui</h1>
                </div>

                <Lista lista={selected} />

            </Content>
        </Container>
    )
}