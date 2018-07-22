import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import { store } from './store';
// import { toggleSidebar } from './store/actions';

console.log('store', store);
console.log('store state', store.getState())
// store.dispatch(toggleSidebar(true));
// console.log('store', store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
