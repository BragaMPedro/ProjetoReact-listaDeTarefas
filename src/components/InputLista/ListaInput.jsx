import { PlusCircle } from "phosphor-react"
import { useState } from "react"
import { Container } from "./listaInputStyle"


export function ListaInput({salvar}){
    const [newLista, setNewlista] = useState("");
    
    function handleNewListaInput(event){
        setNewlista(event.target.value)
    }
    
    function handleSalvarLista(){
        salvar(newLista);
    }

    return(
        <Container onSubmit={handleSalvarLista}>
            <input type="text" required autoFocus onChange={handleNewListaInput} placeholder="Digite nome da Lista"/>
            <button type="submit">
                <PlusCircle/>
            </button>
        </Container>
    )
}