import { Container } from "./TarefaStyle"
import { CheckCircle, Trash } from "phosphor-react"
import { useState } from "react"

export function Tarefa({tarefa, edit, deletarTarefa}) {
    const [isChecked, setIsChecked] = useState(false)

    function handleDeletarTarefa(){
        deletarTarefa(tarefa.id)
    }

    function handleTarefasConcluidas(){
       
       setIsChecked(current => !current);
    }

    return(
        <Container>
            <div className={ isChecked ? "tarefa-concluida" : "tarefa" }>
                {tarefa.nome}
            </div>
            <div>
                <CheckCircle 
                    className={ isChecked ? "btn-concluido-checked" : "btn-concluido" }
                    onClick={handleTarefasConcluidas}/>

                {edit ? <Trash className="btn-deletar" onClick={handleDeletarTarefa}/> : null}
            </div>
        </Container>
    )

}