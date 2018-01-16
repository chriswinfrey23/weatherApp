import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'typeface-raleway';
import 'font-awesome/css/font-awesome.css';
import './assets/css/override.css';

//Bootstrap v4//
window.$ = window.jQuery = require('jquery');
window.Tether = require('tether');
window.Popper = require('popper.js');
require('bootstrap');



ReactDOM.render(<App />, document.getElementById('root'));
