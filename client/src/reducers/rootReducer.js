import { combineReducers } from 'redux'; 
import searchReducer from './search/searchSlice'


export default combineReducers({
    search: searchReducer
})