import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [logger];

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default store;