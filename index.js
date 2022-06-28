const { createStore } = require("redux");

const INCREAMENT = 'INCREAMENT';
const DECREAMENT = 'DECREAMENT';
const RESET = 'RESET';
const INCREAMENTBYVALUE = 'INCREAMENTBYVALUE';

const initialCounterState = {
    count : 0 ,
};

const increamentCounter = () => {
    return {
        type : INCREAMENT,
    }
};

const decreamentCounter = () => {
    return {
        type : DECREAMENT,
    }
};

const resetCounter = () => {
    return {
        type : RESET,
    }
}

const increamentByValue = (value) => {
    return {
        type : INCREAMENTBYVALUE,
        payload : value,
    }
}

const countReducer = (state = initialCounterState,action) => {
    switch (action.type) {
        case INCREAMENT:     
          return { 
            count : state.count + 1,
          }
          case DECREAMENT:     
          return {
            count : state.count - 1,
          }

          case INCREAMENTBYVALUE:     
          return {
            ...state,
            count : state.count + action.payload,
          }

          case RESET:     
          return {
            ...state,
            count : 0,
          }
        default:
           state;
    }
}

const store = createStore(countReducer);
store.subscribe(() => {
    console.log(store.getState());
})
// store.dispatch(increamentCounter());
// store.dispatch(increamentCounter());
// store.dispatch(increamentCounter());
// // store.dispatch(decreamentCounter());
// store.dispatch(resetCounter());
store.dispatch(increamentByValue(20));
store.dispatch(increamentByValue(20));