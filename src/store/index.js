import {createStore, applyMiddleware} from 'redux'
import appReducer from './reducers'
import initialStates from '../initialStates.json'
import thunk from 'redux-thunk'

const consoleMessages = store => next => action => {

    console.groupCollapsed(`Action: ${action.type}`);

    //Dispatch Triggered
    let result = next(action)

    console.log(store.getState())
    console.groupEnd();

    return result

}

export default applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialStates)