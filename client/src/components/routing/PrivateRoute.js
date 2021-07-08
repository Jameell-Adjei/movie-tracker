import { authSelector } from '../../reducers/auth/authSlice';
import { useSelector } from 'react-redux';
import { Route , Navigate} from 'react-router-dom';

const PrivateRoute = ( { ...rest } ) => {
    const { authenticated ,loading } = useSelector(authSelector)

    if(authenticated) {
      return <Route {...rest} />;
    } else {
     return <Navigate to='/' />;
    }  
}


export default PrivateRoute
