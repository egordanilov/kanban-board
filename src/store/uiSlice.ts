import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UIState {
    nightModeIsOn: boolean;
    sidebarIsOpen: boolean;
    addNewTaskIsOpen: boolean;
    taskModalIsOpen: boolean;
}

const initialState: UIState = {
    nightModeIsOn: true,
    sidebarIsOpen: true,
    addNewTaskIsOpen: false,
    taskModalIsOpen: false,
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleNightMode: (state) => {
            state.nightModeIsOn = !state.nightModeIsOn;
        },
        closeSidebar: (state) => {
            state.sidebarIsOpen = false;
        },
        openSidebar: (state) => {
            state.sidebarIsOpen = true;
        },
        closeAddNewTask: (state) => {
            state.addNewTaskIsOpen = false;
        },
        openAddNewTask: (state) => {
            state.addNewTaskIsOpen = true;
        },
        openTaskModal: (state) => {
            state.taskModalIsOpen = true;
        },
        closeTaskModal: (state) => {
            state.taskModalIsOpen = false;
        }
    },
})

export const { toggleNightMode, closeSidebar, openSidebar, openAddNewTask, closeAddNewTask, openTaskModal, closeTaskModal } = uiSlice.actions;

export default uiSlice.reducer;