import React, {useState,useEffect} from 'react'
import validator from 'validator'
import axios from 'axios'

const SignUp = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [errorText,setErrorText] = useState('')

    useEffect(() => {
        console.log('component did mount')
    },[])

    useEffect(() => {
        console.log('state güncellendi',name,email,password)
    },[name])

    const onSubmit = (e) => {
        e.preventDefault()

        if (!validator.isEmail(email)) {

            setErrorText('Email hatalı!!')
            return
        }

        setErrorText('')

        axios.post('https://std02.herokuapp.com/api/users',{
            name,
            email,
            password
        })
        .then((response) => {
            console.log(response)
        })
    }

    return (
        <>
            <h1>Kullanıcı Oluştur</h1>
            <form onSubmit={onSubmit}>
                <input name="name" placeholder="Ad.." value={name} onChange={(e) => {
                    setName(e.target.value)
                }} /><br />
                <input name="email" placeholder="Email.." value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} /><br />
                <input name="password" placeholder="Şifre.." value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} /><br />
                <button>Kaydet</button>
                <p>{errorText}</p>
            </form>
        </>
    )
}

export default SignUp