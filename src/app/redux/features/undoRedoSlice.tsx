import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    undo: [] as any,
    redo: [] as any,
    deviceInLayout: [] as any,
};

export const listDevicesInLayout = createSlice({
    name: "undeRedo",
    initialState,
    reducers: {
        insertListDeviceInLayout: (state, action) => {
            state.deviceInLayout.push(action.payload);
        },
        removeListDeviceInLayout: (state, action) => {
            const newDevices = state.deviceInLayout.filter(
                (device: { id: any; }) => device.id !== action.payload.id
            );
            state.deviceInLayout = newDevices;
        },
        replaceListDevicesInLayout: (state, action) => {
            state.deviceInLayout.splice(0, state.deviceInLayout.length);
            state.deviceInLayout.push(...action.payload);
        },
    },
});

export const {
    insertListDeviceInLayout,
    removeListDeviceInLayout,
    replaceListDevicesInLayout
} = listDevicesInLayout.actions;

export default listDevicesInLayout.reducer;