import React from 'react';
import './App.css';
import Form from './components/form';
import EditForm from './components/edit-form';

class App extends React.Component {
    constructor(props) {
        super(props);
        // Creo un estado y array vacio para meter los usuarios de la API
        this.state = {usuarios: [], userEdited: {name: ''},

        };
    }

    // Obtengo los datos de la api

    componentDidMount(){
        this.obtenerDatos();
    }

    obtenerDatos = () => {
        let url = "https://academlo-api-users.herokuapp.com/users";
        fetch(url)
            .then(response => response.json())
            .then(myJson => {
                this.setState({ usuarios: myJson.data });
                console.log(myJson);
            })
            .catch(error => console.log(error));
    };

    deleteUser = (id) => {
        let userUrl = "https://academlo-api-users.herokuapp.com/user/" + id;
        let userId = {
            method: "DELETE",
        };

        fetch(userUrl, userId)
            .then(response => {
                return response.json;
            })
            .then(datos => {
                console.log(datos);
                this.obtenerDatos()

            })
            .catch(error => {
                console.log(error);
            });
    }

    // /* Creo la variable updateUser, para mejor control de mi codigo, recibira un evento mediante
    // un arrow function*/
    updateUser = (event) => {
        event.preventDefault();
        let url = 'https://academlo-api-users.herokuapp.com/user/' + this.state.userEdited.id;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(this.state.userEdited)
        })
            .then((response) => {
                this.editUser();
                return response.json(); // Regresa una promesa

            })
            .then((results) => {
                console.log(results);
            })
            .catch(error => console.log("error"));
    }

    // Creo un metodo con una funcion flecha, en el callback le paso el usuario del usuario actual
    editUser = (...user) => {
        let userToEdit = "https://academlo-api-users.herokuapp.com/user/" + user;
        if(userToEdit === true) {
            this.setState({

                ...this.state.userEdited,
            })
        }

        console.log(userToEdit);

    }


    handleInputEdit = event => {
        if(true) {
            this.setState({
                userEdited : {
                    ...this.state.userEdited,
                    [event.target.name]: event.target.value
                }
            });
        }

    };


    render() {
        return (
            <div className="App">
                <h1> API ☺ </h1>
                <div className="App-subcontent">
                    <Form obteniendoDatos={this.obtenerDatos}/>
                    <EditForm user={this.state.userEdited} updateUser={this.updateUser}
                              editInput={this.handleInputEdit}  editUser={this.editUser}/>

                    {this.state.usuarios.map((user) => {
                        return (
                            // Key debe estar en el ancestro mas cercano para que no nos presente un
                            // warning
                            <div className="usersCard">
                                <mark> User →</mark>
                                <div className="usersContent">
                                    <p> {user.name} </p>
                                    <p>{user.lastname} </p>
                                    <p>{user.email } </p>
                                    <p>{user.password } </p>
                                    <input type="submit" value="Editar" onClick={() => {
                                        this.editUser(user.id);}}  />
                                    <input type="submit"  value="Borrar" onClick={() => {
                                        this.deleteUser(user.id);}}/>

                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default App;

