import { createSlice } from '@reduxjs/toolkit'

const initialState: {
  sidebarToggled: boolean;
  connectWalletModalToggled: boolean
} = {
  sidebarToggled: false,
  connectWalletModalToggled: false,
};

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
        },
        toggleConnectWalletModal(state, action) {
            state.connectWalletModalToggled = action.payload
        }
    },
})

// eslint-disable-next-line
export const { toggleSidebar, toggleConnectWalletModal } = generalSlice.actions;
export default generalSlice.reducer
