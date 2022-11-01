import { Container, Header, SuasListas } from "./listsBarStyle"
import { ListaInput } from "../InputLista/ListaInput"
import { Plus, Trash } from "phosphor-react"
import { useContext, useState } from "react"
import { ToDoContext } from "../../context/ToDoContext"

export function ListsBar() {
   const { selected, setSelected, listas, setListas, tarefasView, setTarefasView } = useContext(ToDoContext)

   const [addList, setAddList] = useState(false)

   function handleAddList() {
      setAddList(current => !current)
   }

   function handleNewList(nomeLista) {
      let data = new Date()

      const NewList = {
         id: Math.random(),
         nome: nomeLista,
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
      setTarefasView(selected.tarefas)

      setAddList(false)
   }

   function deleteLista(event) {
      const listWithoutDelete = listas.filter(lista => lista.id !== selected.id)

      setListas(listWithoutDelete)

      setSelected(listas[0])
      setTarefasView(selected.tarefas)
   }

   return (
      <Container>
         <Header>
            <button onClick={handleAddList}>
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
                     onClick={event => {
                        setSelected(lista)
                        setTarefasView(selected.tarefas)
                     }}>
                     {lista.nome}
                  </span>
               )
            })}
            {addList ? <ListaInput salvar={handleNewList} /> : null}
         </SuasListas>
      </Container>
   )
}
