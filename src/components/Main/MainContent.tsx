import { CreateNewTask } from "./CreateTask/CreateNewTask";
import { ListedTaks } from "./ListedTasks/ListedTasks";

export function MainContent() {
    return (
      <>
        <CreateNewTask></CreateNewTask>
        <ListedTaks></ListedTaks>
      </>
    )
  }
  