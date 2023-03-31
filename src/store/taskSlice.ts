import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import TasksJSON from './fakeData';

export interface TaskState {
    activeBoard: string;
    tasks: Task[];
    newTask: Task;
};

const initialState:TaskState = {
    activeBoard: "",
    tasks: [],
    newTask: {
        id: '',
        name: '',
        description: '',
        subtasks: [
            {
                subtask_name: 'First Subtask',
                subtask_isCompleted: false,
                id: '3232hgjfdhg',
            },
            {
                subtask_name: 'Second Subtask',
                subtask_isCompleted: false,
                id: 'fdhjfhd434234',
            },
            {
                subtask_name: 'Third Subtask',
                subtask_isCompleted: false,
                id: 'hjghfdj42345435',
            },

        ],
        board_name: '',
        status: "todo",
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
        

        addSubtask: (state, {payload}) => {
            state.newTask.subtasks = [...state.newTask.subtasks, payload];
        },
        removeSubtask: (state, {payload}) => {
            state.newTask.subtasks = state.newTask.subtasks.filter((subtask) => subtask.id !== payload);
        }
    },
});

export const { getTasks, setActiveBoard, addSubtask, removeSubtask } = taskSlice.actions;
export default taskSlice.reducer;