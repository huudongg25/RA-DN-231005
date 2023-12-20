import { combineReducers, createStore } from 'redux'
import countReducer from './reducers/count.reducer';
import updateReducer from './reducers/update.reducer';

const rootReducer = combineReducers({
    count: countReducer,
    update:updateReducer
});

const store = createStore(rootReducer)

export default store