import { combineReducers ,createStore} from "redux"
import todoReducer from "./todoReducer";
import profileReducer from "./profileReducer";




const rootReducer = combineReducers({

todo: todoReducer,
profile: profileReducer

})
const store = createStore(rootReducer , window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());


export default store;