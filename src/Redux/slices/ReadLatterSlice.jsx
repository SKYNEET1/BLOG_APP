import { createSlice } from "@reduxjs/toolkit";

export const ReadLatterSlice = createSlice({
    name:'Readlatter',
    initialState:[],
    reducers:{
        add:(state,actions)=>{
            state.push(actions.payload);
        },
        remove:(state,actions)=>{
            return state.filter((item)=>item.id !== actions.payload.id);
        },
        clearAll:()=>{
            return [];
        },
    }
})

export const {add,remove,clearAll} = ReadLatterSlice.actions;
export default ReadLatterSlice.reducer;