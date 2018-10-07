import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './organisms/App';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('root'));
serviceWorker.unregister();
