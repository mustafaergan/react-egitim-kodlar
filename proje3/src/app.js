import React from 'react'
import ReactDOM from 'react-dom'

class ListingApp extends React.Component {

    constructor () {
        super()

    }

    render () {

        return (
            <>
                <h1>Hello Student</h1>
                <div>
                    <div>
                        <table>
                            <tr>
                                <td>Ad</td>
                                <td>Soyad</td>
                                <td>Sınıf</td>
                            </tr>
                            {
                                
                            }
                        </table>
                    </div>
                    <form>
                        <input name="firstName" placeholder="Ad yazın.." /><br />
                        <input name="lastName" placeholder="Soyad yazın.." /><br />
                        <input name="classroom" placeholder="Sınıf yazın.." /><br />
                        <button>Ekle</button>
                    </form>
                </div>
            </>
        )
    }
}

var root = document.getElementById('app')
ReactDOM.render(<ListingApp />, root)