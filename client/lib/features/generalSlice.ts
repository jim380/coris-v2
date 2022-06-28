import { createSlice } from '@reduxjs/toolkit'

const initialState: {
    sidebarToggled: boolean
} = {
    sidebarToggled: false
}

/**
 * @name generalSlice
 * @description
 */
export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        toggleSidebar(state, action) {
            state.sidebarToggled = action.payload
       }
    },
})

// eslint-disable-next-line
export const {
    toggleSidebar
} = generalSlice.actions
export default generalSlice.reducer
