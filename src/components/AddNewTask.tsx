import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { ChangeEvent, FormEvent, useState } from "react";
import { RootState } from "../store/store";
import { closeAddNewTask } from "../store/uiSlice";
import { EventEmitter } from "stream";
import { addSubtask, removeSubtask, setNewTaskName, setNewTaskDescription, setNewTaskStatus, addNewTaskToTasks, resetNewTaskFormFields } from "../store/taskSlice";
import { RxCross2 } from "react-icons/rx";

const AddNewTaskWrapper = styled.section<{addNewTaskIsOpen: boolean}>`
    background: rgba(0,0,0,0.2);
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    display: ${props => props.addNewTaskIsOpen ? 'flex' : 'none'};
    justify-content: space-around;
    align-items: center;
`;

const FormWrapper = styled.div`
    width: 300px;
    min-height: 300px;
    background: #2c2c37;
    border-radius: 10px;
    padding: 30px;
    position: relative;
`;


const FormGroupWrapper = styled.div`
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
`;

const CloseAddNewTaskForm = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
`;

const FormGroupLabel = styled.label`
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 7px;
`;

const FormHeading = styled.h3`
    margin-bottom: 15px;
    color: #fff;
`;

const SubtaskElementWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 24px;
`;

const SubtaskElement = styled.div`
    width: 100%;
    margin-right: 10px;
    color: #cbcbcc;
    font-size: 14px;
    font-weight: 300;
    padding: 10px;
    border: 1px solid white;
    border-radius: 5px;
`;

function AddNewTask() {
    const addNewTaskIsOpen = useSelector((state: RootState) => state.ui.addNewTaskIsOpen);
    const newTask = useSelector((state: RootState) => state.task.newTask as Task);
    const newSubtasks = useSelector((state: RootState) => state.task.newTask.subtasks);
    const activeBoardName = useSelector((state: RootState) => state.task.activeBoard);
    const dispatch = useDispatch();
    const [subtask, setSubtask] = useState({subtask_name: '', subtask_isCompleted: false});

    const subtaskInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        setSubtask({subtask_name: target.value, subtask_isCompleted: false});
    }

    const addNewSubtaskHandler = (event: FormEvent) => {
        event.preventDefault();
        dispatch(addSubtask({subtask_name: subtask.subtask_name, subtask_isCompleted: false, id: (new Date()).valueOf().toString()}));
        setSubtask({subtask_name: '', subtask_isCompleted: false});
    }

    const removeSubtaskFromNewTaskHandler = (id: string) => {
       dispatch(removeSubtask(id));
    }

    function addNewTaskSubmitHandler() {
        var newTaskObject = {
            id: (new Date()).valueOf().toString(),
            name: newTask.name,
            description: newTask.description,
            subtasks: newTask.subtasks,
            board_name: activeBoardName,
            status: newTask.status,
        }
        dispatch(addNewTaskToTasks(newTaskObject));
        dispatch(closeAddNewTask());
        dispatch(resetNewTaskFormFields());
    }

    return (
        <AddNewTaskWrapper addNewTaskIsOpen={addNewTaskIsOpen}>
            
            <FormWrapper>
                <CloseAddNewTaskForm>
                    <RxCross2 onClick={() => {dispatch(closeAddNewTask())}}/>
                </CloseAddNewTaskForm>
                
                <form onSubmit={(e) => {e.preventDefault()}}>
                    <FormHeading>Add New Task</FormHeading>

                    <FormGroupWrapper>
                        <FormGroupLabel htmlFor="name">Task Name</FormGroupLabel>
                        <input
                            type="text"
                            id="name"
                            placeholder="e.g. Take a coffee break"
                            value={newTask.name}
                            onChange={(e) => {dispatch(setNewTaskName(e.target.value))}}
                            required={true}
                        />
                    </FormGroupWrapper>
                    
                    <FormGroupWrapper>
                        <FormGroupLabel htmlFor="description">Description</FormGroupLabel>
                        <textarea
                            id="description"
                            placeholder="E.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
                            rows={4}
                            value={newTask.description}
                            onChange={(e) => {dispatch(setNewTaskDescription(e.target.value))}}
                        />
                    </FormGroupWrapper>

                    <FormGroupWrapper>
                        {newSubtasks.map((subtask) => {
                            return(
                                <SubtaskElementWrapper key={subtask.id}>
                                    <SubtaskElement>
                                        {subtask.subtask_name}
                                    </SubtaskElement>
                                    <RxCross2 onClick={() => {removeSubtaskFromNewTaskHandler(subtask.id)}}/>
                                </SubtaskElementWrapper>
                            )
                        })}
                        <FormGroupLabel htmlFor="subtasks">Subtasks</FormGroupLabel>
                        <input id="subtasks" type="text" value={subtask.subtask_name} onChange={subtaskInputChangeHandler}/>
                        <button onClick={addNewSubtaskHandler}>Add New Subtask</button>
                    </FormGroupWrapper>
                    
                    <FormGroupWrapper>
                        <FormGroupLabel htmlFor="status">Status</FormGroupLabel>
                        <select id="status" onChange={(e) => {dispatch(setNewTaskStatus(e.target.value))}}>
                            <option value="todo">Todo</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                        <button onClick={() => {addNewTaskSubmitHandler()}}>Create Task</button>
                    </FormGroupWrapper>
                </form>
            </FormWrapper>
        </AddNewTaskWrapper>
    )
}

export default AddNewTask;
