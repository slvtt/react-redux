//import react/redux
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

//import styles
import './css/style.css';
import './sass/style.scss';

//import reducer & main component
import comments from './redux/reducers/comments'
import App from './containers/app';

import {loadState,saveState} from './redux/localStorage/localStorage'
//redux states
let State = loadState();
//redux store
const store = createStore(comments,State,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(()=>{
    saveState(store.getState())
})


// store.dispatch(action_remove_comments({type:'REMOVE_COMMENTS',id}))
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('root')
)


