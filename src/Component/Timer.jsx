import { useEffect } from 'react';
import { useState } from 'react';

export default function Timer({ setStop, questionNumber }) {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    if (timer === 0) return setStop(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000); // => setiap satu detik(1000) akan mengurangi 1 useState function timer
    return () => clearInterval(interval);
  }, [setStop, timer]);

  useEffect(() => {
    setTimer(10);
  }, [questionNumber]);

  return timer;
}
