import React, { ReactNode } from "react";
import styled from 'styled-components';
import { JsxElement } from "typescript";

type Subtask = {
    subtask_name: string;
    subtask_isCompleted: boolean;
}

type TaskProps = {
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
`;

const TaskName = styled.div`
    color: #fff;
    font-weight: 700;
`;

const NumberOfSubtasks = styled.div`
    font-size: 12px;
    color: #6c7383;
`;

function Task({name, description, subtasks, status}:TaskProps) {
    return (
        <TaskWrapper>
            <TaskName>{name}</TaskName>
            <NumberOfSubtasks>0 of 3 subtasks</NumberOfSubtasks>
        </TaskWrapper>
    )
}

export default Task;
