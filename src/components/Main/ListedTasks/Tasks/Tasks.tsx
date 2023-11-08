import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { TaskImgTrash, Task, HiddenCheckbox, StyledCheckbox, TaskSpan } from './style'

import trash from '../../../../assets/trash.svg'
import { useTasks } from '../../../../hooks/use-tasks';
import { useState } from 'react';

export type TaskProps = {
    completed: boolean;
    content: string
    id: number
    onToggleCompleted: () => void;
}

export function Tasks({ id, content, completed, onToggleCompleted: onToggleCompletion }: TaskProps) {
    const { deleteTask } = useTasks()

    const [isChecked, setIsChecked] = useState<boolean>(completed);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        onToggleCompletion();
    };

    return (
        <Task>
            <div>
                <div>
                    <HiddenCheckbox checked={isChecked} onChange={() => handleCheckboxChange()} />
                    <StyledCheckbox checked={isChecked}>
                        {isChecked && <FontAwesomeIcon icon={faCheck} color="white" />}
                    </StyledCheckbox>
                </div>
                <TaskSpan checked={isChecked} >{content}</TaskSpan>
            </div>
            <TaskImgTrash src={trash} onClick={() => deleteTask(id)}></TaskImgTrash>
        </Task>
    )
}
