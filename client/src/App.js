import './styles/main.scss';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Default from './components/pages/Default';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers/rootReducer';
import Results from './components/Results';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './components/routing/PrivateRoute'
import MoviePage from './components/MoviePage';

function App() {
  const store = configureStore({
    reducer : rootReducer
  });
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
            <Navbar icon={null}/>
            <Routes>
              <PrivateRoute path = '/home' element={ <Home/> }/>
              <PrivateRoute path = '/results' element={ <Results/> }/>
              <Route path = '/' element={ <Default/> } />
              <Route path = '/about' element={ <About/> }/>
              <Route path = '/register' element={ <Register/>}/>
              <Route path = '/login' element={ <Login/>}/>
              <PrivateRoute path='/movie/:movieID' element={ <MoviePage/> }/>
            </Routes>
            
        </div>    
      </Router>
    </Provider>



  );
}

export default App;
