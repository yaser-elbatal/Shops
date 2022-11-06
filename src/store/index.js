import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import Reactotron from "../../ReactotronConfig";
import reducers from "./reducers";

const persistsConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["general"],
};

const persistedReducer = persistReducer(persistsConfig, reducers);

export const store = createStore(
    persistedReducer,
    {},
    compose(applyMiddleware(thunk), Reactotron.createEnhancer())
);
export const persistedStore = persistStore(store);
