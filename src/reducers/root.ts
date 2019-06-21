import { combineReducers } from "redux";
import { INCREMENT, DECREMENT, ActionTypes, ActionNames } from "src/actions";
import { createReducer } from "src/utils";

export type CounterState = number;

const counter = createReducer<CounterState, ActionNames, ActionTypes>(0, {
  [INCREMENT](state) {
    return state + 1;
  },
  [DECREMENT](state) {
    return state - 1;
  }
});

const root = combineReducers({ counter });
export type RootState = ReturnType<typeof root>;
export default root;
