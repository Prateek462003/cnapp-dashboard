import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : undefined,
}

const selectedCategorySlice = createSlice({
    name: "selectedCategory",
    initialState,
    reducers:{
        setCategory: (state, action) => {
            state.status = action.payload
        },
        clearCategory: (state, action) =>{
            state.status = ""
        },
    },
})

export const {setCategory, clearCategory} = selectedCategorySlice.actions;

export default selectedCategorySlice.reducer;

