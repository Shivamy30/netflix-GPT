import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieResults:[],
        movieNames:[],
    },
    reducers:{
        toggleShowGptSearch:(state, action) =>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMoviesResult:(state, action) =>{
            const {movieNames, movieResults} = action.payload;
            state.movieResults = movieResults
            state.movieNames = movieNames;
        },
    }
});

export const {toggleShowGptSearch, addGptMoviesResult} = gptSlice.actions;
export default gptSlice.reducer;