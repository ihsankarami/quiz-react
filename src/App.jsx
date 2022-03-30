/* eslint-disable no-dupe-keys */
import { useEffect, useState } from 'react';
import './app.css';
import Trivia from './Component/Trivia';

import imgPooh from './asset/pooh.png';
import imgHatori from './asset/hatori.png';
import imgMulan from './asset/mulan.png';
import imgSinchan from './asset/sinchan.png';
import imgSnowwhite from './asset/snowwhite.jpeg';
import imgTangled from './asset/tangled.png';
import imgUp from './asset/up.png';
import imgSmitty from './asset/kenifafa.png';

import { useMemo } from 'react';
import Timer from './Component/Timer';
import Start from './Component/Start';
import Winner from './Component/Winner';

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);

  const [stop, setStop] = useState(false);
  const [win, setWin] = useState(false);
  const [earned, setEarned] = useState('Rp 0');
  //  const images = [
  //    { id: 1, image: imgSnowwhite },
  //    { id: 2, image: imgMulan },
  //    { id: 3, image: imgUp },
  //    { id: 4, image: imgTangled },
  //    { id: 5, image: imgSmitty },
  //    { id: 6, image: imgPooh },
  //    { id: 7, image: imgHatori },
  //    { id: 8, image: imgSinchan },
  //  ];

  const data = [
    {
      id: 1,
      image: imgSnowwhite,
      question:
        'Sebutkan judul film Walt Disney yang berdasarkan kisah dongeng Jerman ini',
      answer: [
        {
          choice: 'Snow White and The Seven Dwarfs',
          correct: true,
        },
        {
          choice: 'Little Red Riding Hood',
          correct: false,
        },
        {
          choice: 'Sleeping Beauty',
          correct: false,
        },
      ],
    },
    {
      id: 2,
      image: imgMulan,
      question:
        'Demi membantu ayahnya, cewek pemberani menjadi prajurit dan menyembunyikan identitasnya',
      answer: [
        {
          choice: 'Lady and the Trump',
          correct: false,
        },
        {
          choice: 'Mulan ',
          correct: true,
        },
        {
          choice: 'Frozen',
          correct: false,
        },
      ],
    },
    {
      id: 3,
      image: imgUp,
      question:
        'seorang kakek mempertahankan rumahnya karena penuh kenagan bersama mendiang istri',
      answer: [
        {
          choice: 'Melody Time',
          correct: false,
        },
        {
          choice: 'Fantasia',
          correct: false,
        },
        {
          choice: 'Up',
          correct: true,
        },
      ],
    },
    {
      id: 4,
      image: imgTangled,
      question:
        'Wanita ini dikurung ibunya akhirnya berhasil kabur setelah bertemu dengan pencuri baik hati bernama flyyn, film apakah ini?',
      answer: [
        {
          choice: 'Cinderella',
          correct: false,
        },
        {
          choice: 'Tangled ',
          correct: true,
        },
        {
          choice: 'Beauty and the Beast',
          correct: false,
        },
      ],
    },
    {
      id: 5,
      image: imgSmitty,
      question: 'Siapakah dia ??',
      answer: [
        {
          choice: 'Kenii faa ffaa',
          correct: false,
        },
        {
          choice: '  Baby Goba',
          correct: false,
        },
        {
          choice: 'Baby Smitty',
          correct: true,
        },
      ],
    },
    {
      id: 6,
      image: imgPooh,
      question: 'Tokoh dalam film Winnie The Pooh adalah ...',
      answer: [
        {
          choice: 'Pooh Bear, Piglet, Tiger, Rabbit, Kanga, Pluto',
          correct: false,
        },
        {
          choice: 'Pooh Bear, Piglet, Tiger, Rabbit, Kanga, Eeyore ',
          correct: true,
        },
        {
          choice: 'Pooh Bear, Piglet, Tiger, Gober, Kanga, Eeyore',
          correct: false,
        },
      ],
    },
    {
      id: 7,
      image: imgHatori,
      question: 'Siapa nama anjing ninja hatori',
      answer: [
        {
          choice: 'Shishimaru',
          correct: true,
        },
        {
          choice: 'Kirin',
          correct: false,
        },
        {
          choice: 'Shinobu',
          correct: false,
        },
      ],
    },
    {
      id: 8,
      image: imgSinchan,
      question: 'Siapa nama bapaknya Sinchan',
      answer: [
        {
          choice: 'Hidetoshi Nakata',
          correct: false,
        },
        {
          choice: 'Hiroshi Nohara',
          correct: true,
        },
        {
          choice: 'Nohara Sinutsuke',
          correct: false,
        },
      ],
    },
  ];

  const pointBox = useMemo(
    () =>
      [
        { id: 1, amount: 'Rp 10.000' },
        { id: 2, amount: 'Rp 30.000' },
        { id: 3, amount: 'Rp 50.000' },
        { id: 4, amount: 'Rp 100.000' },
        { id: 5, amount: 'Rp 400.000' },
        { id: 6, amount: 'Rp 600.000' },
        { id: 7, amount: 'Rp 700.000' },
        { id: 8, amount: 'Rp 1.000.000' },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(pointBox.find((p) => p.id === questionNumber - 1).amount);
  }, [pointBox, questionNumber]);

  function handleClick() {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }
  return (
    <div className='app'>
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className='main'>
            {win ? (
              <Winner />
            ) : (
              <>
                {stop ? (
                  <>
                    <h1 className='end-text'>Kamu dapat: {earned}</h1>
                    <div>
                      <button className='restart-btn' onClick={handleClick}>
                        Restart
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className='top'>
                      <div className='img'></div>

                      <div className='timer'>
                        <Timer
                          setStop={setStop}
                          questionNumber={questionNumber}
                        />
                      </div>
                    </div>

                    <div className='bottom'>
                      <Trivia
                        data={data}
                        setStop={setStop}
                        setWin={setWin}
                        questionNumber={questionNumber}
                        setQuestionNumber={setQuestionNumber}
                      />
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          <div className='point-box'>
            <ul className='point-list'>
              {pointBox.map((p) => (
                <li
                  className={questionNumber === p.id ? 'point active' : 'point'}
                >
                  <span className='point-amount'> {p.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
