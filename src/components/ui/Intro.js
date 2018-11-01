import React from 'react'

const Intro = ({addName, history}) => {

    let _name

    const handleSubmit = (e) => {
        e.preventDefault()
        addName(_name.value)
        history.push('/quiz')
    }


    return (
        <div className="jumbotron">
            <h1>You Information</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nameInput">What should we call you?</label>
                    <input type="text" className="form-control" id="nameInput"
                           placeholder="You Name" ref={input => _name = input} />
                </div>
                <button type="submit" className="btn btn-primary">Start ></button>
            </form>
        </div>
    )
}

export default Intro