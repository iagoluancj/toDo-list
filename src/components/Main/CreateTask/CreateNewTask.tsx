import { AddNewTask, ButtonCreateNewTask, CreateNewTaskComponent } from "./style";
import addTask from '../../../assets/plus.svg'
import { KeyboardEventHandler, useState } from "react";
import { useTasks } from "../../../hooks/use-tasks";

export function CreateNewTask() {
    const { addTasks} = useTasks()
    const [newTask, setNewTask ] = useState('')

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            addTasks({ id: 2, content: newTask });
            setNewTask(''); 
         }
      }
    
    const generateNumericId = () => Math.floor(Math.random() * 1000000).toString();
    
    return (    
        <CreateNewTaskComponent>
            <AddNewTask
                onKeyDown={handleKeyDown}
                value={newTask} 
                type="text" 
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Adicionar nova tarefa">
            </AddNewTask>
            <ButtonCreateNewTask onClick={() => addTasks({id: Number(generateNumericId()), content: newTask})}>
                Criar
                <img src={addTask} alt="" />
            </ButtonCreateNewTask>
        </CreateNewTaskComponent>
    )
}
