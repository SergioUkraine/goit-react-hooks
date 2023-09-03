import { useEffect, useState } from 'react';

function CounterHooks() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    const totalClick = counterA + counterB;
    document.title = `Всего кликнули ${totalClick} раз`;
  }, [counterA, counterB]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setCounterA(prevState => prevState + 1);
        }}
      >
        Counter A
      </button>
      <p>CLick A: {counterA}</p>
      <button
        type="button"
        onClick={() => {
          setCounterB(prevState => prevState + 1);
        }}
      >
        Counter B
      </button>
      <p>CLick B: {counterB}</p>
    </>
  );
}

export { CounterHooks };
