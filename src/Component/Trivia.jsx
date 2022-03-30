import { useEffect, useState } from 'react';

export default function Trivia({
  data,
  imageId,
  setWin,
  setStop,
  questionNumber,
  setQuestionNumber,
}) {
  const [question, setQuestion] = useState(null);
  const [image, setImages] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState('answer');

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
    setImages(data[questionNumber - 1]);
  }, [data, questionNumber, imageId]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (c) => {
    setSelectedAnswer(c);
    setClassName('answer active');

    delay(500, () =>
      setClassName(c.correct ? 'answer correct' : 'answer wrong')
    );
    delay(2500, () => {
      if (c.correct && questionNumber !== 8) {
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer(null);
        //winning quiz condition
      } else if (questionNumber >= 8) {
        setWin(true);
      } else {
        setStop(true);
      }
    });
  };

  return (
    <div className='trivia'>
      <div className='img'>
        <img src={image?.image} alt='images' />
      </div>
      <div className='question'>{question?.question}</div>
      <div className='answers'>
        {question?.answer.map((c) => (
          <div
            className={selectedAnswer === c ? className : 'answer'}
            onClick={() => !selectedAnswer && handleClick(c)}
          >
            {c.choice}
          </div>
        ))}
      </div>
    </div>
  );
}
