import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import time from "./time";
import movieReducer from './movie/movieReducer'




const rootReducer = combineReducers({
	time,
	movie: movieReducer
});

const middleware = [thunk];
const store = createStore(
	rootReducer,
	{},
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;


// console.log('Initial State', store.getState())
// const unsubscribe =store.subscribe(()=> console.log('update state', store.getState()))
// store.subscribe(() => {console.log(store.getState())})



// unsubscribe()



