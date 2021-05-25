import React, {Component} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizMain.css';
export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'Q1: MS-Word is an example of _____',
            2: 'Q2: Ctrl, Shift and Alt are called .......... keys.',
            3: 'Q3: A computer cannot "boot" if it does not have the _____',
            4: 'Q4: Who is the father of Computers?',
            5: 'Q5: What is Google'
        },
        answers: {
            1: {
                1: 'An operating system',
                2: 'A processing device',
                3: 'Application software'
            },
            2: {
                1: 'modifier',
                2: 'function',
                3: 'alphanumeric'
            },
            3: {
                1: 'Compiler',
                2: 'Loader',
                3: 'Operating system'
            },
            4: {
                1: 'Charles Babbage',
                2: 'Jimmy Henderson',
                3: 'Mark Zuckerberg'
            },
            5: {
                1: 'Web Browser',
                2: 'Search Engine',
                3: 'Internet'
            }
        },
        correctAnswers: {
            1: '3',
            2: '1',
            3: '3',
            4: '1',
            5: '2'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0,
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
                
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        var finalresult = (score >= 3) ? <iframe src="https://giphy.com/embed/3otPoS81loriI9sO8o" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>  : <iframe src="https://giphy.com/embed/USE5vWQyWQvHxVmNIb" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> ;
        return(
            <div className="Content">
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            question={quiestions[step]}

                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button>
                    </>) : (
                        <div className="finalPage" id="Completed">
                            <h1>You have completed the quiz!</h1>
                            <p>Your score is: {score} of {Object.keys(quiestions).length}</p>
                            <p>Thank you!</p>
                            {finalresult}
                        </div>
                    )
                }
            </div>
        );
    }
}