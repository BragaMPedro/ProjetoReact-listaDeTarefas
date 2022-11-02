import { React, useState, createContext } from "react"
import { listasArray } from "../utils/listas"

export const ToDoContext = createContext()

export const ToDoProvider = props => {
   
    let data = new Date();
   const [listas, setListas] = useState([
      {
         id: Math.random(),
         nome: "Sua Primeira lista",
         dataCriacao: `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`,
         tarefas: [
            {
               id: Math.random(),
               nome: "Clique no sinal de + acima",
            },
            {
               id: Math.random(),
               nome: "para gerar uma nova tarefa",
            },
            {
               id: Math.random(),
               nome: "ou use a barra lateral",
            },
            {
               id: Math.random(),
               nome: "e gere uma Nova Lista",
            },
         ],
      },
   ])

   const [selected, setSelected] = useState(listas[0])

   const [tarefasView, setTarefasView] = useState(selected.tarefas)

   return (
      <ToDoContext.Provider value={{ selected, setSelected, listas, setListas, tarefasView, setTarefasView }}>
         {props.children}
      </ToDoContext.Provider>
   )
}
