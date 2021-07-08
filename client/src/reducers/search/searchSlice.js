import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const grabData = createAsyncThunk(
    'search/dataFinding',
    async (result) => {
        const info = await fetch(`http://localhost:3000/search/${result.query}/${result.page_number}`,{
            method: "GET"
        });
        console.log(info)
        const data = await info.json();
        console.log(data)
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




export const { reset, test } = searchSlice.actions
export default searchSlice.reducer

    
// Exporting all the results
export const selectMovies = (state) => 
    state.search.data[0].results
