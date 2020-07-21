import React from 'react';
// import EditForm from './edit-form';
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usersForm: {}
        }
        //me guardara los usuarios que ingresen en el formulario
    }

    // Metodo post, para agregar valores a la API
    addUser = event => {
        event.preventDefault();
        //Agregar un post
        let url = "https://academlo-api-users.herokuapp.com/users";
        let opciones = { // Creo una variable para manejar las opciones, de la peticion
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(this.state.usersForm)
        };

        fetch(url, opciones) // ahora hago la peticion con fetch
            .then(response => {
                return response.json;
            })
            .then(datos => {
                console.log(datos);
                this.props.obteniendoDatos();
            })
            .catch(error => {
                console.log(error);
            });
    };

    //Recibimos los datos del nuevo usuario que sera añadido.
    handleInput = event => {
        this.setState({
            usersForm: {
                // generamos el nuevo estado, con un sprite operator, para que siempre que
                // agreguemos un dato al formulario, se vayan guardando todos los datos
                ...this.state.usersForm,
                [event.target.name]: event.target.value
            }
        });
    };



    render() {
        return(
            <div>
                <form onInput={this.handleInput} onSubmit={this.addUser}>
                    <h3> Agregar Usuario </h3>
                    <input name="name" type="text" placeholder="Nombre:" /> <br/>
                    <input name="lastname" type="text" placeholder="Apellido: "/> <br/>
                    <input name="email" type="email" placeholder="Email: "/> <br/>
                    <input name="password" type="password" placeholder="Contraseña:" /> <br/>
                    <input className="btn btn-success mt-2" type="submit"  value="Registrar" />
                </form>

                {/*<EditForm />*/}
            </div>


        );
    }
}