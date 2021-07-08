import { useState ,  useEffect} from 'react';
import { login ,  authSelector} from '../reducers/auth/authSlice'
import { useSelector , useDispatch } from 'react-redux';
import { useNavigate }  from 'react-router-dom'

const Login = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { authenticated } = useSelector(authSelector);


    const [user , setUser] = useState({
        email : '',
        password : ''
    })

    const { email , password} = user;
    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value})

    useEffect(()=>{
      if(authenticated){
        navigate('/home');
      }
    },[authenticated])


    const onSubmit = (e)=> {
        e.preventDefault();
        console.log('logging on ...')
        if(email === '' || password === ''){
            alert('Please enter in all the fields')
        } else  {
            dispatch(login( { email , password }))
        }
    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>Login Account</h1>
                <label htmlFor='email'>Email Address</label>
                <input
                    id='email'
                    type='email'
                    name='email'
                    required
                    onChange={onChange}
                />

                <label htmlFor='password'>Password</label>
                <input
                    id='password'
                    type='password'
                    name='password'
                    required
                    onChange={onChange}
                    minLength='6'
                /> 
                <input type="submit" value="Login"/>       
                
                                         

            </form>
        </div>
    )
}

export default Login
