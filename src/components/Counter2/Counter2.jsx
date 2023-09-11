import { useReducer } from 'react';

function CountReducer(state, action) {
  switch (action.type) {
    case 'add': {
      return { ...state, count: state.count + action.payload };
    }

    case 'subtract': {
      return { ...state, count: state.count - action.payload };
    }
    default:
      throw new Error(`unsupported action type ${action.type}`);
  }
}

function Counter2() {
  //   const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(CountReducer, { count: 0 });
  return (
    <div>
      <p>{state.count}</p>
      <button
        type="button"
        name="add"
        onClick={() => dispatch({ type: 'add', payload: 1 })}
      >
        Add
      </button>
      <button
        type="button"
        name="subtract"
        onClick={() => dispatch({ type: 'subtract', payload: 1 })}
      >
        Subtract
      </button>
    </div>
  );
}

export default Counter2;
