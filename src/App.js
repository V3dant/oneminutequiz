import React from 'react';
import Modal from 'react-modal';
import './App.css';
import Quiz from './components/QuizMain';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function App() {
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  const [modalIsOpen,setIsOpen] = React.useState(true);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const renderTime = ({ remainingTime }) => {
    if (remainingTime == 0) {
      return <div className="timer">Time's Up</div>;
    }
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };
  function StartQuiz () {
    setIsPlaying(true);
    setIsOpen(false);
  }
  var subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
  }
  return (
    <div className="App">
      <h1 className="Heading">You got a minute to win it!🕒</h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying = {isPlaying}
          duration={60}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [false, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    <Quiz />
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello, this is a simple quiz with a timer. You've just one minute to complete the quiz.</h2>
          <button  className="Button" onClick={StartQuiz}>Start Quiz</button>
        </Modal>
    </div>
  );
  
}

export default App;
