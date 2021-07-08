import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import axios from 'axios';
import setAuthToken from '../../utilities/setAuthToken';


// Load User
export const loadUser = createAsyncThunk (
    // todo load token into global headers

    'auth/loadUser',
    async(_ , thunkAPI) => {
        setAuthToken(Cookies.get('token'))
        
        try {
            const response = await axios.get('http://localhost:5000/api/auth');
            return response.data
        } catch (error) {
            console.log('err sent from load user')
            return thunkAPI.rejectWithValue(error.response.data.message) ;
        }
            
    }

      
)
// Register User
export const register = createAsyncThunk(
    'auth/register',
    async ({name, email, password}, thunkAPI) => {
        const config = {
            headers: {
                'Content-Type' : 'application/json'   
            }
        }
        try {
           const response = await axios.post('http://localhost:5000/api/users', {name, email, password}, config);
            if(response.status === 200){
                console.log(response.data.token)
                Cookies.set('token' , response.data.token, {expires : 1});
            }
            return response.data
        } catch (error) {
           Cookies.remove('token')
           return thunkAPI.rejectWithValue(error.response.data.message) ;
        } 
       
    }
    

)


// Login User

export const login = createAsyncThunk(
    'auth/login',
    async ({name, email, password}, thunkAPI) => {
        const config = {
            headers: {
                'Content-Type' : 'application/json'   
            }
        }
        try {
           const response = await axios.post('http://localhost:5000/api/auth', {name, email, password}, config);
            if(response.status === 200){
                Cookies.set('token' , response.data.token, {expires : 1});
            }
            return response.data
        } catch (error) {
           Cookies.remove('token')
           return thunkAPI.rejectWithValue(error.response.data.message) ;
        } 
       
    }
    

)



const authSlice = createSlice({
    name : 'auth',
    initialState : {
        token : Cookies.get('token'),   
        authenticated : false,
        loading : true,
        user :{ email : null, password : null, password2 : null},
        error : null
    },
    reducers : {
        resetA: state => {
            state.loading =  true;
            state.user = null;
            state.error = null;
            state.token = null;
            state.authenticated = false;
            
          },

          logOut: (state) =>{
            state.loading =  true;
            state.user = null;
            state.error = null;
            state.token = null;
            state.authenticated = false;
            Cookies.remove('token')             
          }
    },
    extraReducers: {
        [loadUser.fulfilled] : (state , action) => {
            state.authenticated = true;
            state.loading = false;
            state.user = action.payload.user;
        },
        [loadUser.rejected] : (state , action) => {
            Cookies.remove('token')
            state.token = null;
            state.authenticated = false;
            state.loading = false;
            state.user = null;
            state.error = action.payload;
        },
        [register.fulfilled] : (state , action) =>{
            console.log('1', action.payload)
            state.token = action.payload.token;
            state.authenticated = true;
            state.loading = false;
            state.error = null;
  
        },
        [register.pending] : ()=>{
            console.log('undecided');
        },
        [register.rejected] : (state , action) => {
            state.token = null;
            state.authenticated = false;
            state.loading = false;
            state.user = null;
            state.error = action.payload;
            
         //   console.log('12', action.payload)
        },

        [login.fulfilled] : (state , action) =>{
            state.token = action.payload.token;
            state.authenticated = true;
            state.loading = false;
            state.error = null;
        },

        [login.rejected] : (state , action) => {
            state.token = null;
            state.authenticated = false;
            state.loading = false;
            state.user = null;
            state.error = action.payload;           
        }
    }

});

export const { resetA, logOut } = authSlice.actions
export default authSlice.reducer
export const authSelector = (state) => state.auth;