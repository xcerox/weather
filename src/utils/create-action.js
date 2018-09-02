import { isObject } from 'lodash';

export function createAction(type, ...props) {
  return (...values) => {
    const action = { type }
    props.forEach((item, index) => {
      if (isObject(item)) {
        Object.keys(item).forEach((key) => {
          action[key] = item[key](values[index]);
        });
      } else {
        action[props[index]] = values[index];
      }
    });

    return action;
  }
}