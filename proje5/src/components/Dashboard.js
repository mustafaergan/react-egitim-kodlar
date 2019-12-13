import React, {Component} from 'react'
import moment from 'moment'
import Day from './Day'
import '../styles/base.css'

class Dashboard extends Component {

    constructor () {
        super()

        this.state = {
            hover: -1
        }

        this.onMouseOut = this.onMouseOut.bind(this)
        this.onMouseOver = this.onMouseOver.bind(this)
    }

    onMouseOver (dayOfMonth) {
        console.log(dayOfMonth)
        this.setState(() => {
            return {
                hover: dayOfMonth
            }
        })
    }

    onMouseOut () {
        this.setState(() => {
            return {
                hover: -1
            }
        })
    }

    generateDays () {

        let jsx = []

        const daysInMonth = moment().daysInMonth()

        for (let i=1; i<=daysInMonth; i++) {
            jsx.push(<Day 
                        key={i}
                        dayOfMonth={i}
                        className={this.state.hover == i ? 'dayOfMonth selected' : 'dayOfMonth'}
                        onMouseOver={this.onMouseOver}
                        onMouseOut={this.onMouseOut}
                        >{i}
                    </Day>)
        }

        return jsx
    }

    render () {
        return (
            <>
                <h1>Dashboard</h1>
                <p>{moment().format('MMMM')}</p>
                <div>
                {this.generateDays()}
                </div>
            </>
        )
    }
}

export default Dashboard