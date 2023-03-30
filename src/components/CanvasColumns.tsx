import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CanvasColumn from "./CanvasColumn";
import { RootState } from '../store/store';

const CanvasColumnsWrapper = styled.section`
    display: flex;
    padding-top: 20px;
    padding-left: 20px;
    overflow: scroll;
`;

function CanvasColumns() {
    const tasks = useSelector((state: RootState) => state.task.tasks);
    const activeBoard = useSelector((state: RootState) => state.task.activeBoard);
    const tasksFilteredByActiveBoard = tasks.filter((task) => task.board_name === activeBoard);
    const taskStatuses = tasks.map(task => task.status);
    const uniqueTaskStatuses = [...new Set(taskStatuses)];

    return(
        <CanvasColumnsWrapper>
            {uniqueTaskStatuses.map((status) => {
                return (
                    <CanvasColumn
                        status={status}
                        numberOfTasks={tasksFilteredByActiveBoard.filter((task) => task.status === status).length} 
                        tasks={tasksFilteredByActiveBoard.filter((task) => task.status === status)}
                    />
                )
            })}
        </CanvasColumnsWrapper>
    )
}

export default CanvasColumns;
