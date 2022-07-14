import { memo, useEffect, useRef, useState } from 'react'
import { Header } from './Header'

const Child = memo(() => {
  console.log('render Child');
  return <p>Child</p>;
});

export const Parent = () => {
  console.log('render App');

  const [timeLeft, setTimeLeft] = useState(100);
  const timerRef = useRef<number | undefined>();
  const timeLeftRef = useRef(timeLeft);

  useEffect(() => {
    timeLeftRef.current = timeLeft;
  }, [timeLeft]);

  const tick = () => {
    if (timeLeftRef.current === 0) {
      clearInterval(timerRef.current);
      return;
    }
    setTimeLeft(prevTime => prevTime - 1);
  };

  const start = () => {
    timerRef.current = setInterval(tick, 10) as unknown as number;
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setTimeLeft(100);
  };

  return (
    <>
      <h1>頻繁に再レンダリングされるコンポーネントをmemo化</h1>
      <Header/>
      <button onClick={start}>start</button>
      <button onClick={reset}>reset</button>
      <p>App: {timeLeft}</p>
      <Child />
    </>
  );
}