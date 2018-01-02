import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'typeface-raleway';
import 'font-awesome/css/font-awesome.css';
import './assets/css/override.css';
import registerServiceWorker from './assets/js/registerServiceWorker';

//Bootstrap v4//
window.$ = window.jQuery = require('jquery');
window.Tether = require('tether');
require('bootstrap');



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
