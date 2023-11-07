import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { TaskImgTrash, Task, HiddenCheckbox, StyledCheckbox, TaskSpan} from './style'

import trash from '../../../../assets/trash.svg'
import { useTasks } from '../../../../hooks/use-tasks';

type TaskProps = {
    content: string
}

export function Tasks({content}: TaskProps) {
    const {handleCheckboxChange, isChecked, deleteTask, tasks} = useTasks()

    return (
        <Task>
            <div>
                <div>
                    <HiddenCheckbox checked={isChecked} onChange={handleCheckboxChange}/>
                    <StyledCheckbox checked={isChecked}>
                        {isChecked && <FontAwesomeIcon icon={faCheck} color="white" />}
                    </StyledCheckbox>
                </div>
                <TaskSpan checked={isChecked} >{content}</TaskSpan>
            </div>
            <TaskImgTrash src={trash} onClick={() => deleteTask(tasks[0].id)}></TaskImgTrash>
        </Task>
    )
}
