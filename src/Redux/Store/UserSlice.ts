import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: null,
        default: null
    },
    reducers: {
        
    }
})
export default UserSlice.reducer;