import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UIState {
    nightModeIsOn: boolean;
    sidebarIsOpen: boolean;
    addNewTaskIsOpen: boolean;
}

const initialState: UIState = {
    nightModeIsOn: true,
    sidebarIsOpen: true,
    addNewTaskIsOpen: true,
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
    },
})

export const { toggleNightMode, closeSidebar, openSidebar, openAddNewTask, closeAddNewTask } = uiSlice.actions;

export default uiSlice.reducer;