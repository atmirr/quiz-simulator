import {C} from '../constants'
import {combineReducers} from 'redux'

const allQuestions = (state=[], action) => {
    switch (action.type) {
        default:
            return state
    }
}

const userProfile = (state=[], action) => {
    switch (action.type) {
        case C.ADD_NAME:
            return {
                "name": action.payload,
                "userAnswers": state.userAnswers,
                "score": state.score,
                "deadline": state.deadline,
                "questionIndicator": state.questionIndicator
            }

        case C.ADD_ANSWER:
            return {
                "name": state.name,
                "userAnswers": [
                        ...state.userAnswers,
                        action.payload
                    ],
                "score": state.score,
                "deadline": state.deadline,
                "questionIndicator": state.questionIndicator
            }

        case C.RAISE_SCORE:
            return {
                "name": state.name,
                "userAnswers": state.userAnswers,
                "score": state.score + 2,
                "deadline": state.deadline,
                "questionIndicator": state.questionIndicator
            }

        case C.REDUCE_SCORE:
            return {
                "name": state.name,
                "userAnswers": state.userAnswers,
                "score": state.score - 1,
                "deadline": state.deadline,
                "questionIndicator": state.questionIndicator
            }

        case C.TERMINATE_DEADLINE:
            return {
                "name": state.name,
                "userAnswers": state.userAnswers,
                "score": state.score,
                "deadline": true,
                "questionIndicator": state.questionIndicator
            }

        case C.RESTART_DEADLINE:
            return {
                "name": state.name,
                "userAnswers": state.userAnswers,
                "score": state.score,
                "deadline": false,
                "questionIndicator": state.questionIndicator
            }

        case C.SHIFT_INDICATOR:
            return {
                "name": state.name,
                "userAnswers": state.userAnswers,
                "score": state.score,
                "deadline": state.deadline,
                "questionIndicator": state.questionIndicator + 1
            }

        case C.RESET_INDICATOR:
            return {
                "name": state.name,
                "userAnswers": state.userAnswers,
                "score": state.score,
                "deadline": state.deadline,
                "questionIndicator": 0
            }

        default:
            return state
    }
}

export default combineReducers({allQuestions, userProfile})