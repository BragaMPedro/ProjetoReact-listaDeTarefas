import { Container, Content } from "./homeStyle";
import { ToDoContext } from "../../context/ToDoContext";
import { useEffect, useState, useContext } from "react";
import { listasArray } from "../../utils/listas";
import { Lista } from "../../components/Lista/listaTarefas";
import { ListsBar } from "../../components/SideBar/ListsBar";

export function Home(){
    const {selected, setSelected, listas, setListas} = useContext(ToDoContext);
 
    useEffect( () => {
        setListas(listasArray);
    }, []);

    return(
        <Container>

            <ListsBar/>

            <Content>
                <div>
                    <h1>Bem vindo ao Listeiro</h1>
                    <h1>Sua lista aqui</h1>
                </div>

                <Lista key={selected.id} lista={selected} />

            </Content>
        </Container>
    )
}