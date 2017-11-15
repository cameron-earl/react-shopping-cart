import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery/dist/jquery.min'
import 'materialize-css/dist/css/materialize.css'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
