import { useTasks } from "../../../hooks/use-tasks";
import { DefaultContent } from "./DefaultContent/DefaultContent";
import { Tasks } from "./Tasks/Tasks";
import { MainListed, OrganizationSpan, SpanBG, SpanH2Completed, SpanH2CreatedTaks, TasksCreatedAndCompleted } from "./styles";

export function ListedTaks() {
    const { tasks, toggleTaskCompletion } = useTasks()

    const completedTasksCount = tasks.filter((task) => task.completed).length;

    return (
        <>
            <TasksCreatedAndCompleted>
                <OrganizationSpan>
                    <SpanH2CreatedTaks>Tarefas criadas</SpanH2CreatedTaks>
                    <SpanBG>{tasks.length}</SpanBG>
                </OrganizationSpan>

                <OrganizationSpan>
                    <SpanH2Completed>Concluidas</SpanH2Completed>
                    <SpanBG>{completedTasksCount} de {tasks.length}</SpanBG>
                </OrganizationSpan>
            </TasksCreatedAndCompleted>
            <MainListed>
                {tasks.length <= 0 ? (
                    <DefaultContent></DefaultContent>
                ) : (
                    tasks.map((task) => (
                        <Tasks
                            key={task.id}
                            id={task.id}
                            content={task.content}
                            completed={task.completed}
                            onToggleCompleted={() => toggleTaskCompletion(task.id)}
                        ></Tasks>
                    ))
                )}
            </MainListed>
        </>
    )
}
