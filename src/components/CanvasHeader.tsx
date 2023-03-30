import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { openAddNewTask } from "../store/uiSlice";

const CanvasHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 72px;
    background: #2c2c37;
    border-bottom: 2px solid #363641;
`;

const BoardNameHeading = styled.h3`
    margin-left: 50px;
`;

const CanvasHeaderAddNewTask = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center; 
    margin-right: 20px;
    background: #645fc7;
    border: none;
    color: #fff;
    height: 32px;
    border-radius: 5px;
    font-weight: 600;
    padding: 15px;
    font-size: 16px;

    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`;

function CanvasHeader() {
    const activeBoard = useSelector((state: RootState) => state.task.activeBoard);
    const dispatch = useDispatch();
    return(
        <CanvasHeaderWrapper>
            <BoardNameHeading>{activeBoard}</BoardNameHeading>
            <CanvasHeaderAddNewTask onClick={() => {dispatch(openAddNewTask())}}>New Task</CanvasHeaderAddNewTask>
        </CanvasHeaderWrapper>
    )
}

export default CanvasHeader;
