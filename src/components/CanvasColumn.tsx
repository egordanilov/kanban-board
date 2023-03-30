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


function CanvasColumn() {
    return (
        <CanvasColumnWrapper>
            <CanvasColumnHeader>
                <CanvasColumnHeaderCircle />TODO (4)
            </CanvasColumnHeader>
            <Task id="642487a5c640f80539acdb14" name="Research pricing points" description="We know what we need to build for version 1, now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition." subtasks={[{subtask_name: "First Subtask", subtask_isCompleted: true}]} status="todo" />
        </CanvasColumnWrapper>
    )
}

export default CanvasColumn;
