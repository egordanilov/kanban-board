import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UIState {
    nightModeIsOn: boolean;
    sidebarIsOpen: boolean;
}

const initialState: UIState = {
    nightModeIsOn: true,
    sidebarIsOpen: true,
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleNightMode: (state) => {
            state.nightModeIsOn = !state.nightModeIsOn;
        },
        closeSidebar: (state) => {
            console.log('close sidebar was clicked');
            state.sidebarIsOpen = false;
        },
        openSidebar: (state) => {
            state.sidebarIsOpen = true;
        }
    },
})

export const { toggleNightMode, closeSidebar, openSidebar } = uiSlice.actions;

export default uiSlice.reducer;