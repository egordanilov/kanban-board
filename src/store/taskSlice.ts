import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import TasksJSON from './fakeData';

export interface TaskState {
    activeBoard: string;
    tasks: Task[];
};

const initialState:TaskState = {
    activeBoard: "",
    tasks: [],
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
    },
});

export const { getTasks, setActiveBoard } = taskSlice.actions;
export default taskSlice.reducer;