import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addName} from '../../actions'
import Intro from "../ui/Intro";

class IntroContainer extends Component {

    render() {
        const {addName, history} = this.props
        return (
            <div>
                <Intro addName={addName} history={history} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addName(name) {
        dispatch( addName(name) )
    }
})

export default connect(null, mapDispatchToProps)(IntroContainer)