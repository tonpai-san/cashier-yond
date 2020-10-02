import {combineReducers} from "redux";
import {reducer as reduxForm} from "redux-form";
import ProductReducer from "./ProductReducer";
import OrderReducer from "./OrderReducer";


// มี state 2 ตัวคือ  orders products 
// orders ใช้ OrderReducer ในการจัดการ state
// products ใช้ ProductReducer state
const rootReducer = combineReducers({
    orders : OrderReducer,
    products : ProductReducer,
    form : reduxForm

})

export default rootReducer;