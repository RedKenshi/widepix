// Le fameux reducer pour le counter !
// Il est important ici que les fonctions soient "pures"

const doSomethingWithCounter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const countIncremented = state + action.by;
      return countIncremented;
    case 'DECREMENT':
      const countDecremented = state - action.by;
      return countDecremented;
    default:
      return state;
  }
};

export default doSomethingWithCounter;
