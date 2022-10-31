import { Container } from "./TarefaStyle"
import { CheckCircle, Trash } from "phosphor-react"
import { useState } from "react"

export function Tarefa({ tarefa, edit, deletarTarefa}) {
    const [isChecked, setIsChecked] = useState(false)
    const [tarefasConcluidas, setTarefasConcluidas] = useState([])

    function handleDeletarTarefa(){
        deletarTarefa(tarefa.id)
    }

    function handleTarefasConcluidas(){
       
       setIsChecked(current => !current);

        if(isChecked == true){
          let tarefasConcluidasMinusTarefa = tarefasConcluidas.filter((concluida) => tarefa.id !== concluida.id)
          setTarefasConcluidas(tarefasConcluidasMinusTarefa)
        }else{
            
            setTarefasConcluidas([...tarefasConcluidas, tarefa])
        }

    }
    
    return(
        <Container>
            <div className={ tarefasConcluidas.includes(tarefa) ? "tarefa-concluida" : "tarefa" }>
                {tarefa.nome}
            </div>
            <div>
                <CheckCircle 
                    className={ tarefasConcluidas.includes(tarefa) ? "btn-concluido-checked" : "btn-concluido" }
                    onClick={handleTarefasConcluidas}/>

                {edit ? <Trash className="btn-deletar" onClick={handleDeletarTarefa}/> : null}
            </div>
        </Container>
    )

}