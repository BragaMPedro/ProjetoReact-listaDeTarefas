import { Container, Header, SuasListas } from "./listsBarStyle"
import { Plus, Trash } from "phosphor-react"
import { useContext } from "react"
import { ToDoContext } from "../../context/ToDoContext"

export function ListsBar() {
   const { selected, setSelected, listas, setListas, tarefasView, setTarefasView } = useContext(ToDoContext)

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
      setTarefasView(NewList.tarefas)
      setSelected(NewList)
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
                        setSelected(lista),
                        setTarefasView(lista.tarefas)
                     )}>
                     {lista.nome}
                  </span>
               )
            })}
         </SuasListas>
      </Container>
   )
}
