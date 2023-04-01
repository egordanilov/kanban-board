import styled from "styled-components";
import Task from './Task';

const CanvasColumnWrapper = styled.div`
    min-width: 250px;
    margin-right: 20px;
    min-height: 100vh;
`;
const CanvasColumnHeader = styled.div`
    display: flex;
    font-size: 12px;
    letter-spacing: .2em;
    margin-bottom: 15px;
`;
const CanvasColumnHeaderCircle = styled.div`
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: #8371f0;
    margin-right: 7px;

    

`;

interface CanvasColumnProps {
    status: string;
    numberOfTasks: number;
    tasks: Task[];
}

function CanvasColumn({status, numberOfTasks, tasks}: CanvasColumnProps) {

    return (
        <CanvasColumnWrapper>
            <CanvasColumnHeader>
                <CanvasColumnHeaderCircle />{status.toLocaleUpperCase()} ({numberOfTasks})
            </CanvasColumnHeader>
            {tasks.map((task) => {
                return(
                    <Task id={task.id}
                        name={task.name}
                        description={task.description}
                        subtasks={task.subtasks}
                        status={status as "todo" | "doing" | "done"}
                        key={task.id}
                    />
                )
            })}
        </CanvasColumnWrapper>
    )
}

export default CanvasColumn;
