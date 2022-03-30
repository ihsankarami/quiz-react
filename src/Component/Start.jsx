import { useRef } from 'react';

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () =>
    inputRef.current.value && setUsername(inputRef.current.value);
  return (
    <div className='start'>
      <h1 className='quiz-title'>Baladuk Quiz</h1>
      <div className='start-el'>
        <input
          placeholder='tulis nama kamu'
          className='startInput'
          ref={inputRef}
        />

        <button className='start-button' onClick={handleClick}>
          Start
        </button>
      </div>
    </div>
  );
}
