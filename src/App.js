import './App.scss';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const decreaseHandler = () => {
    if (count > 0) {
      setCount(count -1);
    }
    return null;
  };
  const increaseHandler = () => {
    setCount(count + 1);
  }
  let content;
  if (count%2 === 0 && count%5 === 0) {
    content = "FooBar";
  } else if (count%2 === 0) {
    content = "Foo";
  } else if (count%5 === 0) {
    content = "Bar";
  } else {
    content = count
  }
  return (
    <div className="App">
      <h1 className="counter">
        {count}
      </h1>
      <div className="content-wrapper">
        <button onClick={decreaseHandler} className="button">-</button>
        <p className="content">{content}</p>
        <button onClick={increaseHandler} className="button">+</button>
      </div>
    </div>
  );
}

export default App;
