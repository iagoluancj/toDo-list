import { createContext, useState, useContext } from "react";

type Task = {
    id: number;
    content: string;
    completed: boolean; 
}

type TaskProviderProps = {
    children: React.ReactNode
}

type TasksContextType = {
    tasks: Task[]
    addTasks: (task: Task) => void
    deleteTask: (taskId: number) => void;
    toggleTaskCompletion: (taskId: number) => void; 
}

export const TasksContext = createContext<TasksContextType>({ tasks: [], addTasks: () => null, deleteTask: () => null, toggleTaskCompletion: () => null})

export const TasksProvider = ({ children }: TaskProviderProps) => {
    const [tasks, setTasks] = useState<Task[]>([])

    const deleteTask = (taskId: number) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    }

    const addTasks = (task: Task) => {
        if (task.content.trim() !== '') {
            setTasks([...tasks, task]);
        }
    };

    const toggleTaskCompletion = (taskId: number) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };


    return (
        <TasksContext.Provider value={{ tasks, addTasks, deleteTask, toggleTaskCompletion}}>
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