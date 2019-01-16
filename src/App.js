import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCtAZVPqL9T3ABHpCCuJWClsOy48-6cQps',
            authDomain: 'manager-2a535.firebaseapp.com',
            databaseURL: 'https://manager-2a535.firebaseio.com',
            projectId: 'manager-2a535',
            storageBucket: 'manager-2a535.appspot.com',
            messagingSenderId: '138237012485'
          };
          firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}
export default App;
