import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user",
    initialState:{
        user:[],
        users:{
            id:"",
        },
        userValue:false, //nakabase sa reduce= getalluser
        //  usersValue:false
    },
    reducers:{
        getAllUser:(state)=>{
            state.userValue=true;
            // console.log(`toggle ${state.userValue}`)

        },
       
    }


});


export const {getAllUser } = userSlice.actions;
export const usersReducer = userSlice.reducer;






const buttonslice =createSlice({
    name:"button",
    initialState:{
        buttonValue:false
    },
    reducers:{
        toggleButton:(state)=>{
            state.buttonValue=true;
            // console.log(`togglebutton ${state.buttonValue}`)

        },
        trueButton:(state)=>{
            state.buttonValue=false;

        },
        falseButton:(state)=>{
            state.buttonValue=!state.buttonValue;

        }
    }
})

export const {toggleButton, trueButton,falseButton} = buttonslice.actions;
export const buttonReducer = buttonslice.reducer;



