import React from 'react'
import {NavLink} from 'react-router-dom'

export default () => {

    return (
        <>
            <NavLink to="/">Anasayfa</NavLink>
            <NavLink to="/add">Yeni Ekle</NavLink>
            <NavLink to="/signup">Kullanıcı Oluştur</NavLink>
        </>
    )
}