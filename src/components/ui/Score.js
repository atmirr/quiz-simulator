import React from 'react'

const Score = ({name, score, history}) => {

    return (
        <div className="jumbotron">
            <h1>You Score</h1>
            <p>Dear {name},</p>
            <p>You got {score} score in this quiz!</p>
            <div className="row justify-content-md-center" style={{marginTop: 20}}>
                <button type="button" onClick={() => {history.push('/quiz')}}
                        className="btn btn-info large">
                    Try Again
                </button>
            </div>
        </div>
    )
}

export default Score