export function createReducer(initalState, handlers) {
  return function reducer(state = initalState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  }
}