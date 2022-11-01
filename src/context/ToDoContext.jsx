import {React, useState, createContext} from "react";
import { listasArray } from "../utils/listas";

export const ToDoContext = createContext();

export const ToDoProvider = (props) => {

    const [listas, setListas] = useState(listasArray);
    
    const [selected, setSelected] = useState(listas[0]);
    
    const [tarefasView, setTarefasView] = useState(selected.tarefas)
    
    return(
        <ToDoContext.Provider 
        value={{selected, setSelected, listas, setListas, tarefasView, setTarefasView}}
        >
            {props.children}
        </ToDoContext.Provider>
    )
}