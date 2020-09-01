import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    addMessage,
    addPost,
    stateObjectPropTypes,
    updateNewMessageText,
    updateNewPostText
} from "./components/redux/redux";


export let rerenderEntireThree = (state: stateObjectPropTypes) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                addMessage={addMessage}
                updateNewMessageText={updateNewMessageText}
                updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

