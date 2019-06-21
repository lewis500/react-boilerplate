export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export type ActionNames = typeof INCREMENT | typeof DECREMENT;
type IncrementAction = {type: typeof INCREMENT};
type DecrementAction = {type: typeof DECREMENT};
export type ActionTypes = IncrementAction | DecrementAction;