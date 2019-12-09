class ListingApp extends React.Component {

    constructor () {
        super()

        this.state = {
            cities: []
        }
    }

    onSubmit (e) {
        e.preventDefault()
        console.log(e)

        const newCity = e.target.elements.city.value
        console.log(newCity)

        this.setState((prevState) => {

            // Concat
            // const newArray = prevState.cities.concat([newCity])

            // Spread Operator
            const cities = [...prevState.cities, newCity]

            return {
                cities
            }
        })
    }

    render () {

        return (
            <>
                <h1>Hello Listing</h1>
                <div>
                    <form onSubmit={this.onSubmit}>
                        <input placeholder="Şehir ismi yazın.." name="city" />
                        <button>Listeye Ekle</button>
                    </form>
                </div>
            </>
        )
    }
}

var root = document.getElementById('app')
ReactDOM.render(<ListingApp />, root)