import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
       // this.state = {
       //
       // }

       this.addUser = this.addUser.bind(this);
    }

    // Metodo post, para agregar valores a la API
    addUser = event => {
        event.preventDefault();
        //Agregar un post
        fetch("https://academlo-api-users.herokuapp.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(this.state.usuarios)
        })
            .then(response => response.json())
            .then(results => console.log(results))
            .catch(error => console.log(error));
    };

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    };


    render() {
        return(
            <div>
                <form onInput={this.handleInput} onSubmit={this.addUser}>
                    <input name="name" type="text" placeholder="Nombre:" /> <br/>
                    <input name="lastname" type="text" placeholder="Apellido: "/> <br/>
                    <input name="email" type="email" placeholder="Email: "/> <br/>
                    <input name="password" type="password" placeholder="Contraseña:" /> <br/>
                    <input type="submit"  value="Registrar" />
                </form>
            </div>
        );
    }
}