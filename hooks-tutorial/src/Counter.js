import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT' :
      return { value: state.value + 1 };
    case 'DECREMENT' :
      return { value: state.value -1 };
  }
}

const Counter = () => {
  const [ state, dispatch ] = useReducer(reducer, { value: 0});

  return (
    <>
      <div>
        현재 값: {state.value}
        <button onClick={()=> dispatch({ type: 'INCREMENT'})}>+</button>
        <button onClick={()=> dispatch({ type: 'DECREMENT'})}>-</button>
      </div>
    </>
  )
}

export default Counter;
// import React, { useReducer } from 'react';

// function reducer(state, action) {
//   switch (action.type) {
//     case 'INCREMENT' :
//       return { value: state.value + 1};
//     case 'DECREMENT' :
//       return { value: state.value - 1};
//     default:
//       return state;
//   }
// }

// const Counter = () => {
//   const [state, dispatch] = useReducer(reducer, { value: 0});

//   return (
//     <>
//       <div>
//         현재 카운터 값: {state.value} 
//       </div>
//       <button onClick={() => dispatch({ type: 'INCREMENT'})}>+</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT'})}>-</button>
//     </>
//   )
// }

// export default Counter;