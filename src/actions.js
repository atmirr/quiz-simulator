import {C} from './constants'

export const addName = name => ({
    type: C.ADD_NAME,
    payload: name
})

export const addAnswer = (questionId, answerId) => (dispatch, getState) => {

    const {allQuestions} = getState()

    dispatch( {type: C.ADD_ANSWER, payload: answerId} )
    return (allQuestions[questionId].correctAnswerID === answerId) ?
        dispatch( raiseScore() ) :
        dispatch( reduceScore() )

}

export const raiseScore = () => ({
    type: C.RAISE_SCORE
})

export const reduceScore = () => ({
    type: C.REDUCE_SCORE
})

export const terminateDeadline = () => ({
    type: C.TERMINATE_DEADLINE
})

export const restartDeadline = () => ({
    type: C.RESTART_DEADLINE
})

export const shiftIndicator = () => ({
    type: C.SHIFT_INDICATOR
})

export const resetIndicator = () => ({
    type: C.RESET_INDICATOR
})