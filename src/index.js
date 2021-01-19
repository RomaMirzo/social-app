import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} 
             dispatch={store.dispatch.bind(store)}
            //  addPost={store.addPost.bind(store)} 
            //  updateNewPostText={store.updateNewPostText.bind(store)}
            //  sendMessage={store.sendMessage.bind(store)}
            //  updateMessageArea={store.updateMessageArea.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
  );
} 

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
