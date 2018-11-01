import React, {Component} from 'react'
import {connect} from 'react-redux'
import ShowQuestion from "../ui/ShowQuestion";
import {addAnswer, terminateDeadline, restartDeadline, shiftIndicator, resetIndicator} from '../../actions'

class ShowQuestionContainer extends Component {

    componentDidMount() {
        this.props.restartDeadline()
        this.timerId = setTimeout(() => {
            this.props.terminateDeadline()
        }, 8000)
    }

    componentWillUpdate() {
        if(this.timerId)
            clearTimeout(this.timerId)
    }

    componentDidUpdate() {
        if(!this.props.deadline) {
            this.timerId = setTimeout(() => {
                this.props.terminateDeadline()
            }, 8000)
        }
    }

    render() {
        const {allQuestions, addAnswer, deadline, questionIndicator, terminateDeadline, restartDeadline, shiftIndicator, history, resetIndicator} = this.props
        return (
            <div>
                {allQuestions.map( question => {
                        return <ShowQuestion
                                    key={question.id}
                                    questionId={question.id}
                                    question={question.question}
                                    answers={question.answers}
                                    correctAnswerID={question.correctAnswerID}
                                    addAnswer={addAnswer}
                                    deadline={deadline}
                                    questionIndicator={questionIndicator}
                                    shiftIndicator={shiftIndicator}
                                    terminateDeadline={terminateDeadline}
                                    restartDeadline={restartDeadline}
                                    history={history}
                                    resetIndicator={resetIndicator} />
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    allQuestions: state.allQuestions,
    deadline: state.userProfile.deadline,
    questionIndicator: state.userProfile.questionIndicator
})

const mapDispatchToProps = dispatch => ({
    addAnswer(questionId, answerId) {
        dispatch(addAnswer(questionId, answerId))
    },
    terminateDeadline() {
        dispatch(terminateDeadline())
    },
    restartDeadline() {
        dispatch(restartDeadline())
    },
    shiftIndicator() {
        dispatch(shiftIndicator())
    },
    resetIndicator() {
        dispatch(resetIndicator())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowQuestionContainer)