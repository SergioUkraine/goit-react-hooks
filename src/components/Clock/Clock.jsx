import { useState, useEffect, useRef } from 'react';

// class Clock extends Component {
//   state = { time: new Date() };
//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log('Это интервал каждые 1000ms ' + Date.now());
//       this.setState({ time: new Date() });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     console.log('Этот метод вызывается перед размонтированием');
//     this.stop();
//   }

//   stop = () => {
//     clearInterval(this.intervalId);
//   };
//   render() {
//     return (
//       <div>
//         <p>Current time: {this.state.time.toLocaleTimeString()}</p>
//         <button onClick={this.stop}>Stop</button>
//       </div>
//     );
//   }
// }

function ClockHooks() {
  const [time, setTime] = useState(new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('Это интервал каждые 1000ms ' + Date.now());
      setTime(new Date());
    }, 2000);
    return () => {
      // здесь можно чистить после размонтирования функции
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current); // Очистка интервала при нажатии на кнопку "Stop"
  };
  console.log(intervalId);
  return (
    <div>
      <p>Current time: {time.toLocaleTimeString()}</p>
      <button onClick={stop}>Stop</button>
    </div>
  );
}

export { ClockHooks }; //Clock
