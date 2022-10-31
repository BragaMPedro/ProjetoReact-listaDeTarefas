import { Container } from "./TarefaStyle"
import { CheckCircle } from "phosphor-react"
import { useState } from "react"

export function Tarefa({ tarefa, deleteTarefa }) {
    const [isChecked, setIsChecked] = useState(false)
    const [tarefasConcluidas, setTarefasConcluidas] = useState([])

    function handleTarefasConcluidas(){
       
       setIsChecked(current => !current);

        if(isChecked == true){
          let tarefasConcluidasMinusTarefa = tarefasConcluidas.filter((concluida) => tarefa.id !== concluida.id)
          setTarefasConcluidas(tarefasConcluidasMinusTarefa)
        }else{
            
            setTarefasConcluidas([...tarefasConcluidas, tarefa])
        }

    }

    function concluidasCheck(){

        setIsChecked(current => !current)
    }
    
    return(
        <Container>
            <div className={ tarefasConcluidas.includes(tarefa) ? "tarefa-concluida" : "p" }>
                {tarefa.nome}
            </div>
            <CheckCircle 
                className={ tarefasConcluidas.includes(tarefa) ? "btn-concluido-checked" : "btn-concluido" }
                onClick={handleTarefasConcluidas}/>
        </Container>
    )

}