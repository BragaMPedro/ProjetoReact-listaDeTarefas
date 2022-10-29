import {React, useState, createContext} from "react";
import { listasArray } from "../utils/listas";

export const ToDoContext = createContext();

export const ToDoProvider = (props) => {
    const [selected, setSelected] = useState(listasArray[0]);

    const [listas, setListas] = useState(listasArray);
    
    function handleMostrarTarefas(listaId){
        let tarefas = listas.find(e => e.id === listaId)
        setSelected(tarefas);

    }

    

    return(
        <ToDoContext.Provider 
        value={{selected, setSelected, handleMostrarTarefas, listas, setListas}}
        >
            {props.children}
        </ToDoContext.Provider>
    )
}