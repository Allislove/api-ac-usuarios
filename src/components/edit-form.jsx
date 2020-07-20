import React from 'react';

export default function EditForm (props){

    const {name, lastname, email, password} = props.user || {};

    return (
        <div>
            <h2>Editar usuario</h2>
            <form  /*onClick={props.user} */ onSubmit={props.updateUser} onInput={props.editInput}>
            <input name="name" type="text" placeholder="Nombre" defaultValue={name}  />
            <input name="lastname" type="text" placeholder="Apellidos" defaultValue={lastname} />
            <input name="email" type="email" placeholder="Email" defaultValue={email}  />
            <input name="password" type="password" placeholder="Contraseña" defaultValue={password} />
            <input type="submit" value="Actualizar usuario" />
            </form>
        </div>
    )
}

