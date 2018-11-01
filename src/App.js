import React, {Component} from 'react'
import ShowQuestion from "./components/container/ShowQuestionContainer"
import Intro from "./components/container/IntroContainer"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./sections/Header";
import Score from "./components/container/ScoreContainer";

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <main role="main" className="container" style={{marginTop: 88}}>
                        <Route path="/" exact component={Intro} />
                        <Route path="/quiz" component={ShowQuestion} />
                        <Route path="/result" component={Score} />
                    </main>
                </div>
            </Router>
        )
    }
}

export default App