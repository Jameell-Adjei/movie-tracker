import { useState } from 'react';
import { useEffect }from 'react';
import { register , loadUser, authSelector , resetA } from '../reducers/auth/authSlice'
import { useSelector , useDispatch } from 'react-redux';
import { useNavigate }  from 'react-router-dom'




const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { authenticated } = useSelector(authSelector);
    const [user , setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    const { name, email, password, password2 } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    useEffect(()=>{
      if(authenticated){
        navigate('/home');
      }
    },[authenticated])
    const onSubmit = (event ) => {
        event.preventDefault();
        if(email === '' || password === ''){
            console.log(email, password)
            alert('Please enter in all the fields')
        } else if (password !== password2) {
            alert('Passwords do not match')
        } else {
            console.log(authenticated)
            dispatch(register({name, email, password}));           
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>Register Account</h1>

         <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            required
          />


          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
    
      
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
            minLength='6'
          />
      
      
          <label htmlFor='password2'>Confirm Password</label>
          <input
            id='password2'
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            required
            minLength='6'
          />
                <input type="submit" value="Register"/>                          

            </form>
        </div>
    )
}

export default Register