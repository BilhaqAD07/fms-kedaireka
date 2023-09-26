import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shapeSelected: null,
};

export const layoutSlice = createSlice({
    name:"shape",
    initialState,
    reducers: {
        selectedShape: (state, action) => {
            state.shapeSelected = action.payload;
        },
    },
});

export const { selectedShape } = layoutSlice.actions;

export default layoutSlice.reducer;