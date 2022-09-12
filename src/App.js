import React,{useEffect,useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import Home from './Pages/Home';
import { AuthContext, firebaseappContext } from './store/firebaseContext';
import Create from './Components/Create/Create';
import View from './Components/View/View';
import Post from './store/PostContext';
import ViewPost from './Pages/ViewPost';


function App() { 
const{setUser}=useContext(AuthContext)
const{firebase}=useContext(firebaseappContext)

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
  })
})
  return (
    <div>
      <Post>
      <Router>
        <Route exact path='/'>
      <Home />
        </Route>

        <Route path='/signup'>
        <Signup/>
        </Route>

        <Route path='/login'>
        <Login/>
        </Route> 

        <Route path='/create'>
        <Create/>
        </Route>

        <Route path='/view'>
        <View/>
        </Route>


      </Router>
      </Post>
    </div>
  );
}


export default App;
