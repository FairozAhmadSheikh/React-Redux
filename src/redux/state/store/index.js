import { createStore,combineReducers } from "redux";
import {accountBalance} from '../reducer'


export const store= createStore(
    combineReducers({
        accountBalance:accountBalance
    })
)