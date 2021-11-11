/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

import jquery from 'jquery';

// Starting React
import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import Main from './components/Main';
ReactDom.render(<Router><Main/></Router>, document.getElementById('main-app'));
