import { useTasks } from "../../../hooks/use-tasks";
import { Tasks } from "./Tasks/Tasks";
import { MainListed, OrganizationSpan, SpanBG, SpanH2Completed, SpanH2CreatedTaks, TasksCreatedAndCompleted } from "./styles";

export function ListedTaks() {
    const { tasks } = useTasks()
     return (
        <>
            <TasksCreatedAndCompleted>
                <OrganizationSpan>
                    <SpanH2CreatedTaks>Tarefas criadas</SpanH2CreatedTaks>
                    <SpanBG>{tasks.length}</SpanBG>
                </OrganizationSpan>

                <OrganizationSpan>
                    <SpanH2Completed>Concluidas</SpanH2Completed>
                    <SpanBG>{`0`} de {tasks.length}{/* tasksConcluded */}</SpanBG>
                </OrganizationSpan>
            </TasksCreatedAndCompleted>
            <MainListed>
                {/* <DefaultContent></DefaultContent> */}
                {tasks.map((task) => <Tasks key={task.id} content={task.content}></Tasks>)}
            </MainListed>
        </>
    )
}
