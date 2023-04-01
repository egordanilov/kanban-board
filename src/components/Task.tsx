import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenedTask } from '../store/taskSlice';
import { openTaskModal } from '../store/uiSlice';
import { RootState } from '../store/store';

type Subtask = {
    subtask_name: string;
    subtask_isCompleted: boolean;
}

type TaskProps = {
    id: string;
    name: string;
    description: string;
    subtasks: Subtask[];
    status: "todo" | "doing" | "done";
}

const TaskWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-around;
    max-width: 100%;
    min-height: 50px;
    margin-bottom: 15px;
    background: red;
    border-radius: 10px;
    padding: 10px;
    background: #2c2c37;
    filter: drop-shadow(1px 1px 2px #2c2c37);

    &:hover {
        opacity: 0.9;
        cursor: pointer;
    }
`;

const TaskName = styled.div`
    color: #fff;
    font-weight: 700;
`;

const NumberOfSubtasks = styled.div`
    font-size: 12px;
    color: #6c7383;
`;

function Task({id, name, description, subtasks, status}:TaskProps) {
    const dispatch = useDispatch();
    const tasksArray = useSelector((state: RootState) => state.task.tasks)
    const taskClickHandler = () => {
        console.log('task has been clicked');
        //find the task in list
        const foundTask = tasksArray.filter((task) => task.id === id)[0];
        console.log(foundTask);
        dispatch(setOpenedTask(foundTask));
        //display this task in a modal

        dispatch(openTaskModal());   
    }

    return (
        <TaskWrapper onClick={() => {taskClickHandler()}}>
            <TaskName>{name}</TaskName>
            <NumberOfSubtasks>0 of {subtasks.length} subtasks</NumberOfSubtasks>
        </TaskWrapper>
    )
}

export default Task;
