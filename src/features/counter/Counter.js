import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  return (
    <section className="sec-1">
      <div className="container">
        <p>{count}</p>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button
            onClick={() => {
              setIncrementAmount(0);
              dispatch(reset());
            }}
          >
            Reset
          </button>
          <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
            Inc
          </button>
        </div>
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          placeholder={"Increment by amount..."}
        />
      </div>
    </section>
  );
};

export default Counter;
