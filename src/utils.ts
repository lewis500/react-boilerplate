// import moize from "moize";

// export const binder = moize((fn, ...args1) => (...args2) =>
//   fn(...args1, ...args2)
// );
// create-reducer.ts
import { Action } from 'redux'
type Handlers<State, Types extends string, Actions extends Action<Types>> = {
  readonly [Type in Types]: (state: State, action: Actions) => State
}
export const createReducer = <State, Types extends string, Actions extends Action<Types>>(
  initialState: State,
  handlers: Handlers<State, Types, Actions>,
) => (state = initialState, action: Actions) =>
  handlers.hasOwnProperty(action.type) ? handlers[action.type as Types](state, action) : state

// import { Reducer } from "src/types/Reducer";

// export function createReducer<S, A>(
//   initialState: S,
//   handlers: { [key: string]: Reducer<S, A> }
// ): Reducer<S, A> {
//   return function reducer(state: S = initialState, action: A): S {
//     return handlers.hasOwnProperty(action.type)
//       ? handlers[action.type](state, action)
//       : state;
//   };
// }
