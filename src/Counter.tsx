import { useAppSelector, useAppDispatch } from "./store/hooks";
import { decrement, increment, selectCount } from "./store/counterSlice";

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <span>{count}</span>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </div>
  );
}
