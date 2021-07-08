import { combineReducers } from 'redux'; 
import searchReducer from './search/searchSlice'
import authReducer from './auth/authSlice';



export default combineReducers({
    search : searchReducer,
    auth : authReducer
})