import React from 'react'

const ShowAnswer = ({answerId, handleAnswer, deadline, answer, correctAnswerID}) => {

    let status = 'info'

    if(deadline)
        status = (correctAnswerID === answerId) ? 'success' : 'danger'

    return (
        <button type="button"
                className={'list-group-item list-group-item-' + status}
                onClick={handleAnswer.bind(this, answerId)}
                style={{cursor: (deadline) ? "auto" : "pointer"}}>
            {answer}
        </button>
    )

}

export default ShowAnswer