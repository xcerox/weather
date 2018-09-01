export function createAction(type, ...props) {
  return (...values) => {
    const action = { type }
    props.forEach((item, index) => {
      action[props[index]] = values[index];
      
    })

    return action;

  }
}