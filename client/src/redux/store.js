import { createStore , applyMiddleware , compose } from 'redux';
import reducer from './reducer';
import { thunk } from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // sirve para conectar con extencion de navegador => REDUX DEVTOOLS 

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk)) // sirve para poder hacer peticiones a la API
    )

export default store;