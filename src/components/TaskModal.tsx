import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { openTaskModal, closeTaskModal } from "../store/uiSlice";
import { addSubtask, updateStatusOfOpenedTask } from "../store/taskSlice";
import { RxCross2 } from "react-icons/rx";

const TaskModalWrapper = styled.div<{taskModalIsOpen: boolean}>`
    background: rgba(0,0,0,0.2);
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    display: ${props => props.taskModalIsOpen ? 'flex' : 'none'};
    justify-content: space-around;
    align-items: center;
`;

const TaskWindow = styled.div`
    width: 300px;
    min-height: 300px;
    background: #2c2c37;
    border-radius: 10px;
    padding: 30px;
    position: relative;
`;

const TaskHeading = styled.h3`
    color: white;
    margin-bottom: 15px;
`;

const CloseTaskModal = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
`;

const TaskDescription = styled.p`
    font-size: 14px;
    line-height: 1.5;
`;

const SubtaskLabel = styled.label<{subtaskIsCompleted: boolean}>`
    text-decoration: ${props => props.subtaskIsCompleted ? 'line-through' : 'none'};
`;

function TaskModal() {
    const taskModalIsOpen = useSelector((state: RootState) => state.ui.taskModalIsOpen);
    const openedTask = useSelector((state: RootState) => state.task.openedTask);
    const dispatch = useDispatch();

    return(
        <TaskModalWrapper taskModalIsOpen={taskModalIsOpen} onClick={() => {/*dispatch(closeTaskModal())*/}}>
            <TaskWindow>
                <CloseTaskModal>
                    <RxCross2 onClick={() => {dispatch(closeTaskModal())}}/>
                </CloseTaskModal>
                <TaskHeading>{openedTask.name}</TaskHeading>
                <TaskDescription>{openedTask.description}</TaskDescription>
                Subtasks
                <form>
                    {openedTask.subtasks.map((subtask: Subtask) => {
                        return(
                            <div key={subtask.subtask_name}>
                                <input
                                type="checkbox"
                                name={`subtask${subtask.id}`}
                                value={subtask.subtask_name}
                                checked={subtask.subtask_isCompleted}
                                key={subtask.id}
                                onChange={() => {console.log(subtask)}}
                                />
                                <SubtaskLabel
                                    htmlFor={`subtask${subtask.id}`}
                                    subtaskIsCompleted={subtask.subtask_isCompleted}
                                >
                                    {subtask.subtask_name}
                                </SubtaskLabel>
                            </div>
                        )
                    })}
                    
                </form>


                Status placeholder
                <select id="status" onChange={(e) => {dispatch(updateStatusOfOpenedTask(e.target.value))}}>
                    <option value="todo">Todo</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>

            </TaskWindow>
        </TaskModalWrapper>
    )
}

export default TaskModal;

