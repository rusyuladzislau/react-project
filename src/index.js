import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/state'

let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
        state={state}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );  
}

renderEntireTree(store.getState())
store.subscribe(renderEntireTree)

serviceWorker.unregister();
