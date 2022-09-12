import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { firebaseappContext } from './store/firebaseContext';
import Context from './store/firebaseContext'; 
import firebase from './firebase/config';


ReactDOM.render(
<firebaseappContext.Provider value={{firebase}}>
    <Context>
    <App />
    </Context>
</firebaseappContext.Provider>
, document.getElementById('root'));

