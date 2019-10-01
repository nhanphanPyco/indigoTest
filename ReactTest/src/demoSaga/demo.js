
const increaseAction = (step) => {
  return {
    type: 'INCREMENT',
    step: step
  }
}

// Giảm với giá trị step
const decreaseAction = (step) => {
  return {
    type: 'DECREMENT',
    step: step
  }
}

const counterReducers = (times = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return times + action.step;
    case 'DECREMENT':
      return times - action.step;

    default:
      return times;
  }
}

export { counterReducers, increaseAction, decreaseAction };