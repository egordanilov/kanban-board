import styled from "styled-components";

const AddNewTaskWrapper = styled.section`
    background: rgba(0,0,0,0.2);
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
`;

function AddNewTask() {
    return (
        <AddNewTaskWrapper>
            Add New Task Modal Goes Here
        </AddNewTaskWrapper>
    )
}

export default AddNewTask;
