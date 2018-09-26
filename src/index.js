import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// También podemos renderizar el componente <App /> dentro del <BrowserRouter /> para habilitar Routing
// en toda la applicación.
// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

registerServiceWorker();
