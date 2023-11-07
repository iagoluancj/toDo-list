import { createContext, useState, useContext } from "react";

type Task = {
    id: number;
    content: string;
}

type TaskProviderProps = {
    children: React.ReactNode
}

type TasksContextType = {
    tasks: Task[]
    addTasks: (task: Task) => void
    isChecked: boolean; 
    handleCheckboxChange: () => void;
    deleteTask: (taskId: number) => void;
}

export const TasksContext = createContext<TasksContextType>({ tasks: [], addTasks: () => null, handleCheckboxChange: () => null, isChecked: false, deleteTask: () => null})

export const TasksProvider = ({ children }: TaskProviderProps) => {
    const [tasks, setTasks] = useState<Task[]>([])


    const [isChecked, setIsChecked] = useState<boolean>(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        let test = 0
        if (!isChecked) {
            test = test + 1
        } else {
            test = - 1
        }

        console.log(test)
    };

    const deleteTask = (taskId: number) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
        console.log(updatedTasks)
    }
    
    const addTasks = (task: Task) => {
        if (task.content.trim() !== '') {
            setTasks([...tasks, task]);
        }
    };

    return (
        <TasksContext.Provider value={{ tasks, addTasks, isChecked, handleCheckboxChange, deleteTask }}>
            {children}
        </TasksContext.Provider>
    )
}

export const useTasks = () => {
    const context = useContext(TasksContext)

    if (context === undefined) {
        throw new Error('Use tasks must be provided within tasks provider')
    }

    return context
}