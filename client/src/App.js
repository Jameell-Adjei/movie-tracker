import './styles/main.scss';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers/rootReducer';
import Results from './components/Results';
import Register from './components/Register';
import Login from './components/Login';

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
              <Route path = '/home' element={ <Home/> }/>
              <Route path = '/about' element={ <About/> }/>
              <Route path = '/results' element={ <Results/> }/>
              <Route path = '/register' element={ <Register/>}/>
              <Route path = '/login' element={ <Login/>}/>
            </Routes>
            
        </div>    
      </Router>
    </Provider>



  );
}

export default App;
