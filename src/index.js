import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Apilist from './Components/ApiCall.jsx';
import EventHandler from './Components/EventHandler.jsx'
import Condtional from './Components/ConditionalRender'

ReactDOM.render(<Condtional />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
