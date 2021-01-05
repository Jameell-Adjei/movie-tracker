import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';




export const grabData = createAsyncThunk(
    'search/dataFinding',
    async (query , page_number) => {
        const info = await fetch(`http://localhost:5000/search/${query}/${page_number}`,{
            method: "GET"
        });

        const data = await info.json();
        return data;
    }
)

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        loading : true,
        data : []
    },
    reducers: {
      reset: state => {
        state.loading =  true;
        state.data = [];
      } 
    
  },
    extraReducers: {
        [grabData.pending]: (state , action) => {
            state.loading = true;
            console.log('state is being updated')
         },

        [grabData.fulfilled]: (state , action) => {
            state.loading = false;
            state.data.push(action.payload)            
        },

    }


})




export const { reset } = searchSlice.actions
export default searchSlice.reducer