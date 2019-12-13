import React, {useState,useEffect} from 'react'
import validator from 'validator'
import axios from 'axios'

const SignIn = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [errorText,setErrorText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!validator.isEmail(email)) {

            setErrorText('Email hatalı!!')
            return
        }

        setErrorText('')

        axios.post('https://std02.herokuapp.com/api/users/login',{
            email,
            password
        })
        .then((response) => {
            console.log(response)

            const xauth = response.headers.xauth
            sessionStorage.setItem('xauth',xauth)
        })
    }

    return (
        <>
            <h1>Giriş Yap</h1>
            <form onSubmit={onSubmit}>
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

export default SignIn