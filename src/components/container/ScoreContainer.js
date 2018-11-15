import React, {Component} from 'react'
import {connect} from 'react-redux'
import Score from "../ui/Score";

class ScoreContainer extends Component {

    render() {
        const {name, score, history} = this.props
        return (
            <div>
                <Score name={name} score={score} history={history} />
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    name: state.userProfile.name,
    score: state.userProfile.score
})

export default connect(mapStateToProps)(ScoreContainer)