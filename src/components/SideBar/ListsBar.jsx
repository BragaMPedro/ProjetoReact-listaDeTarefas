import { Container, Header, SuasListas } from "./listsBarStyle";
import { listasArray } from "../../utils/listas";
import { Plus, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { ToDoContext } from "../../context/ToDoContext";

export function ListsBar(){
    const {selected, handleMostrarTarefas, setSelected, lista, setListas} = useContext(ToDoContext);

    function handleNewList(event){
        let data = new Date();
        
        const NewList = {
            id: Math.random(),
            nome: "Nova Lista",
            dataCriacao: `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`,
            tarefas:[ 
                {
                    id: Math.random(),
                    nome: "Nova Tarefa",
                }]
        }
        setListas(...NewList);
        console.log(NewList);
        console.log(lista);
    }

    function deleteLista(event){
        selected
    }

    return(
        <Container>
            <Header>
                <button onClick={handleNewList}>
                    <Plus/>
                </button>
                <button onClick={deleteLista}>
                    <Trash/>
                </button>
            </Header>
            <SuasListas>
                {listasArray.map(lista =>{
                    return(
                        <span key={lista.id} onClick={(event) =>{( handleMostrarTarefas(lista.id) )}}> {lista.nome} </span>

                        )
                    })}
            </SuasListas>
        </Container>
    )
}