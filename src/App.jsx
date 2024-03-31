import { useState } from 'react'
import { decreaseCount, increaseCount } from './redux/actions/counter.jsx'
import store from './redux/store/store.jsx'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {

  //console.log('store: ', store.getState());

  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const handleIncrease = () => {
    //setCount((prev) => prev + 1)

    // Dispatch action to add a new count to redux store
    const action = increaseCount(count);
    dispatch(action);
  }

  const handleDecrease = () => {
    //setCount((prev) => prev - 1)

    //// Dispatch action to add a new count to redux store
    const action = decreaseCount(count);
    dispatch(action);
  }

  return (
    <div className='App'>
      <h1>Redux tutorials</h1>
      <h4>
        {count}
      </h4>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default App
