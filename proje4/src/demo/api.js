import axios from 'axios'

const url = 'https://std02.herokuapp.com'

// Promise
axios.get(url+'/api/student')
.then((response) => {

    // Promise resolve
    // başarılı bağlantı
    console.log(response.data)
})
.catch((err) => {

    // Promise reject
    // bağlantı hatası -- err
})
.finally(() => {

    // her durumda çalışacak kod bloğu
})