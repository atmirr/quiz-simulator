import React from 'react'
import {mapStateToProps} from '../container/ScoreContainer'
import Score from '../ui/Score'
import renderer from 'react-test-renderer'

describe("The Score Component", () => {
    describe("The Container Element", () => {
        describe("mapStateToProps", () => {
            it("should map the state to props correctly", () => {
                const sampleUserProfile = {
                    name: 'Amir',
                    score: 20
                }
                const appState = {
                    userProfile: sampleUserProfile
                }
                const componentState = mapStateToProps(appState)
                expect(componentState).toEqual(sampleUserProfile)
            })
        })
    })
    describe("The Display Element", () => {
        it("Should not regress", () => {
            const tree = renderer
                .create(<Score name="Amir" score={20} />)
                .toJSON()
            expect(tree).toMatchSnapshot()
        })
    })
})