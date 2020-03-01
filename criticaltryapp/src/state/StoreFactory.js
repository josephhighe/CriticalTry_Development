import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";

import RootReducer from "./reducers/RootReducer";

export const history = createBrowserHistory();

//allows chrome plugin ReduxDevTools to see state
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function StoreFactory(preloadedState) {
  const store = createStore(
    RootReducer(history), // root reducer with router state
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history) // for dispatching history actions
        // ... other middlewares ...
      )
    )
  );

  return store;
}
