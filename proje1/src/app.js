class Counter extends React.Component {

    constructor () {
        super()

        this.onIncrease = this.onIncrease.bind(this)

        this.state = {
            count: 1
        }
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
            <div>
                <h1>Hello React</h1>
                <p>Current Count: {this.state.count}</p>
                <button onClick={this.onDecrease}>Azalt</button>
                <button onClick={this.onIncrease}>Arttır</button>
            </div>
        )
    }
}

var root = document.getElementById('app')
ReactDOM.render(<Counter />, root)