import { Container, Header, SuasListas } from "./listsBarStyle";
import { listasArray } from "../../utils/listas";
import { useState } from "react";
import { Trash } from "phosphor-react";

export function Indice(){
    const [lista, setLista] = useState();

    function handleShowList(event){
        {event.target.value}
    }

    return(
        <Container>
            <Header>
                <button 
                // onClick={}
                >
                    +
                </button>
                <button 
                // onClick={}
                >
                    <Trash/>
                </button>
            </Header>
            <SuasListas>
                {listasArray.map(lista =>{
                    return(
                        <span key={lista.id} onClick={handleShowList} >{lista.nome}</span>
                        )
                    })}
            </SuasListas>
        </Container>
    )
}