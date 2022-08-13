
import {Fragment, useState} from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0)
  return (
    <Fragment>
      <div className='wrapper'>
    <button onClick={() => setCounter(counter + 1)} className='mainButton'>Up</button>
    <div className='counterContainer'>{counter}</div>
    <button onClick={() => setCounter(counter - 1)} className='mainButton'>Down</button>
    <button onClick={() => setCounter(counter = 0)} className='resetCounter'>Reset</button>
    </div>
    <div className='optionsWrapper'>
    <button onClick={() => setCounter(counter + 10)} className='button10'>+10</button>
    <button onClick={() => setCounter(counter - 10)} className='button10 toLeft'>-10</button>
    <button onClick={() => setCounter(counter + 50)} className='button10'>+50</button>
    <button onClick={() => setCounter(counter - 50)} className='button10 toLeft'>-50</button>
    <button onClick={() => setCounter(counter + 100)} className='button10'>+100</button>
    <button onClick={() => setCounter(counter - 100)} className='button10 toLeft'>-100</button>
    </div>
    </Fragment>
  );
}

export default App;
