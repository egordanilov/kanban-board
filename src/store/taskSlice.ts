import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import TasksJSON from './fakeData';

export interface TaskState {
    activeBoard: string;
    tasks: Task[];
    newTask: Task;
    openedTask: Task;
};

const initialState:TaskState = {
    activeBoard: "",
    tasks: [],
    newTask: {
        id: '',
        name: '',
        description: '',
        subtasks: [],
        board_name: '',
        status: "todo",
    },
    openedTask: {
        id: '',
        name: '',
        description: '',
        subtasks: [],
        board_name: '',
        status: 'todo',
    }
};

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        getTasks: (state) => {
            state.tasks = TasksJSON as Task[];
            state.activeBoard = state.tasks[0].board_name;
        },
        setActiveBoard: (state, {payload}) => {
            state.activeBoard = payload;
        },
        setNewTaskName: (state, {payload}) => {
            state.newTask.name = payload;
        },
        setNewTaskDescription: (state, {payload}) => {
            state.newTask.description = payload;
        },
        setNewTaskStatus: (state, {payload}) => {
            state.newTask.status = payload;
        },
        addSubtask: (state, {payload}) => {
            state.newTask.subtasks = [...state.newTask.subtasks, payload];
        },
        removeSubtask: (state, {payload}) => {
            state.newTask.subtasks = state.newTask.subtasks.filter((subtask) => subtask.id !== payload);
        },
        addNewTaskToTasks: (state, {payload}) => {
            state.tasks = [...state.tasks, payload];
        },
        resetNewTaskFormFields: (state) => {
            state.newTask = initialState.newTask; 
        },
        setOpenedTask: (state, {payload}) => {
            state.openedTask = payload;
        },
    },
});

export const { getTasks, setActiveBoard, addSubtask, removeSubtask, setNewTaskName, setNewTaskDescription, setNewTaskStatus, addNewTaskToTasks, resetNewTaskFormFields, setOpenedTask } = taskSlice.actions;
export default taskSlice.reducer;