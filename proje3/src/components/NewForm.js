import React from 'react'

export default (props) => {

    const {onSubmit,editingStudent} = props

    return (
        <form onSubmit={onSubmit}>
            <input name="firstName" placeholder="Ad yazın.." defaultValue={editingStudent != undefined ? editingStudent.firstName : ''} /><br />
            <input name="lastName" placeholder="Soyad yazın.." defaultValue={editingStudent != undefined ? editingStudent.lastName : ''} /><br />
            <input name="classroom" placeholder="Sınıf yazın.." defaultValue={editingStudent != undefined ? editingStudent.classroom : ''} /><br />
            <button>{editingStudent == undefined ? 'Ekle' : 'Güncelle'}</button>
        </form>
    )
}