import { Container, Header, SuasListas } from "./listsBarStyle"
import { Plus, Trash } from "phosphor-react"
import { useContext, useState } from "react"
import { ToDoContext } from "../../context/ToDoContext"

export function ListsBar() {
   const { selected, setSelected, listas, setListas } = useContext(ToDoContext)

   function handleNewList(event) {
      let data = new Date()

      const NewList = {
         id: Math.random(),
         nome: "Nova Lista",
         dataCriacao: `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`,
         tarefas: [
            {
               id: Math.random(),
               nome: "Nova Tarefa",
            },
         ],
      }
      setListas([...listas, NewList])
      setSelected(NewList)
      //TODO Focus em textarea Nome
   }

   function deleteLista(event) {
      const listWithoutDelete = listas.filter(lista => lista.id !== selected.id)
      setListas(listWithoutDelete)
      setSelected(listas[0])
   }

   return (
      <Container>
         <Header>
            <button onClick={handleNewList}>
               <Plus />
            </button>

            <button onClick={deleteLista}>
               <Trash />
            </button>
         </Header>
         <SuasListas>
            {listas.map(lista => {
               return (
                  <span
                     key={lista.id}
                     className={lista.id == selected.id ? "btn-lista-selected" : "btn-lista"}
                     onClick={(event) =>(
                        setSelected(lista)
                     )}>
                     {lista.nome}
                  </span>
               )
            })}
         </SuasListas>
      </Container>
   )
}
