import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { closeAddNewTask } from "../store/uiSlice";

const AddNewTaskWrapper = styled.section<{addNewTaskIsOpen: boolean}>`
    background: rgba(0,0,0,0.2);
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    display: ${props => props.addNewTaskIsOpen ? 'block' : 'none'}
`;

function AddNewTask() {
    const addNewTaskIsOpen = useSelector((state: RootState) => state.ui.addNewTaskIsOpen)
    const dispatch = useDispatch();
    return (
        <AddNewTaskWrapper addNewTaskIsOpen={addNewTaskIsOpen} onClick={() => {dispatch(closeAddNewTask())}}>
            Add New Task Modal Goes Here
        </AddNewTaskWrapper>
    )
}

export default AddNewTask;
