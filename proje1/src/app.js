class Counter extends React.Component {

    constructor () {
        super()

        this.onIncrease = this.onIncrease.bind(this)
        this.onDecrease = this.onDecrease.bind(this)

        this.state = {
            count: 1
        }
    }

    onDecrease () {

        this.setState((prevState) => {
            return {
                count: prevState.count-1
            }
        })
    }

    onIncrease () {

        this.setState((prevState) => {
            return {
                count: prevState.count+1
            }
        }, () => {
            
            console.log('arttır!',this.state.count)
        })

    }

    render () {

        return (
            <>
                <h1>Hello React</h1>
                <p>Current Count: {this.state.count}</p>
                <button onClick={this.onDecrease}>Azalt</button>
                <button onClick={this.onIncrease}>Arttır</button>
            </>
        )
    }
}

var root = document.getElementById('app')
ReactDOM.render(<Counter />, root)