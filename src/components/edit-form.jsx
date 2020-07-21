import React from 'react';

export default function EditForm (props){
    const {name, lastname, email, password} = props.user;

    return (
        <div>
            <h2>Editar usuario</h2>
            <form  onSubmit={props.updateUser} onInput={props.handleInputEdit}>
            <input name="name" type="text" placeholder="Nombre" Value={name}  />
            <input name="lastname" type="text" placeholder="Apellidos" Value={lastname} />
            <input name="email" type="email" placeholder="Email" Value={email}  />
            <input name="password" type="password" placeholder="Contraseña" Value={password} />
            <input type="submit" value="Actualizar usuario" />
            </form>
        </div>
    )
}

