import React from 'react'
import ShowAnswer from "./ShowAnswer";

const ShowQuestion = ({questionId, question, answers, addAnswer, deadline, questionIndicator, shiftIndicator, terminateDeadline, restartDeadline, correctAnswerID, history, resetIndicator}) => {

    const handleAnswer = (answerId, e) => {
        e.preventDefault()
        if(!deadline) {
            terminateDeadline()
            addAnswer(questionId, answerId)
        }
    }

    const handleIndicator = (e) => {
        e.preventDefault()
        shiftIndicator()
        restartDeadline()
    }

    const handleFinish = (e) => {
        e.preventDefault()
        resetIndicator()
        history.push('/result')
    }

    return (
        <div className="jumbotron" style={{display: (questionIndicator === questionId) ? "block" : "none"}}>
            <h3>{question}?</h3>
            <div className="list-group">
                {answers.map( (answer, answerId) =>
                    <ShowAnswer key={answerId}
                                answerId={answerId}
                                handleAnswer={handleAnswer}
                                deadline={deadline}
                                correctAnswerID={correctAnswerID}
                                answer={answer} />
                )}
            </div>
            <div className="row justify-content-md-center" style={{marginTop: 20}}>
                {(questionId === 9) ? (
                    <button onClick={handleFinish}
                            style={{display: (deadline) ? "block" : "none"}}
                            className="btn btn-info large">
                        See Result!
                    </button>
                ) : (
                    <button onClick={handleIndicator}
                            style={{display: (deadline) ? "block" : "none"}}
                            className="btn btn-info large">
                        Next Question >
                    </button>
                )}
            </div>
        </div>
    )

    }

export default ShowQuestion