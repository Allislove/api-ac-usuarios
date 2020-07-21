import React from 'react';

export default function EditForm (props){
    const {name, lastname, email, password} = props.user;

    return (
                <form onSubmit={props.updateUser} onInput={props.handleInputEdit}>
                    <div className="align-items-center form-group">
                        <h3>Editar usuario</h3>
                        <div>
                            <input name="name" type="text" placeholder="Nombre" Value={name} />
                        </div>
                        <div>
                            <input name="lastname" type="text" placeholder="Apellidos" Value={lastname} />
                        </div>
                        <div>
                            <input name="email" type="email" placeholder="Email" Value={email}  />
                        </div>
                        <div>
                            <input name="password" type="password" placeholder="Contraseña" Value={password} />
                        </div>
                        <div>
                            <input className="btn btn-secondary mt-2" type="submit" value="Actualizar usuario" />
                        </div>
                </div>
                </form>

    )
}

