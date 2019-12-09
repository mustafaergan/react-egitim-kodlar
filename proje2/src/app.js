class ListingApp extends React.Component {

    constructor () {
        super()

        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            cities: []
        }
    }

    componentDidMount () {

        const citiesStr = sessionStorage.getItem('cities')

        if (citiesStr != undefined) {

            const cities = JSON.parse(citiesStr)

            this.setState(() => {
                return {
                    cities
                }
            })
        }
    }

    onRemove (index) {

        this.setState((prevState) => {

            const cities = prevState.cities
            const deletedItem = cities.splice(index,1)

            return {
                cities
            }
        }, () => {

            const str = JSON.stringify(this.state.cities)
            sessionStorage.setItem('cities', str)
        })
    }

    onSubmit (e) {
        e.preventDefault()

        const newCity = e.target.elements.city.value
        e.target.elements.city.value = ''

        this.setState((prevState) => {

            const cities = [...prevState.cities, newCity]

            return {
                cities
            }
        }, () => {

            const str = JSON.stringify(this.state.cities)
            sessionStorage.setItem('cities', str)
        })
    }

    render () {

        return (
            <>
                <h1>Hello Listing</h1>
                <div>
                    {
                        this.state.cities.length > 0 ?                        
                        <ul>
                        {
                            this.state.cities.map((item,index) => {
                                return (
                                    <li key={index}>
                                        {item}
                                        <button onClick={() => {
                                            this.onRemove(index)
                                        }}>SİL</button>
                                    </li>
                                )
                            })
                        }
                        </ul>
                        :
                        <p>Lütfen şehir ekleyin</p>
                    }
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