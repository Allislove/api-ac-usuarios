import React from 'react';
import './App.css';
import Form from './components/form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        usuarios: [] // Creo un array vacio para meter los usuarios de la API
    };
  }

  // Obtengo los datos de la api

    componentDidMount(){
      this.obtenerDatos();
      this.deleteUser();
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

  render() {
    return (
        <div className="App">
            <h1> API ☺ </h1>
            <div className="App-subcontent">
                <Form obteniendoDatos={this.obtenerDatos}/>
                {this.state.usuarios.map((user, id) => {
                    return (
                        // Key debe estar en el ancestro mas cercano para que no nos presente un
                        // warning
                        <div className="usersCard" key={id}>
                            <mark> User →</mark>
                            <div  onClick={() => {
                                this.deleteUser(user.id);}}  className="usersContent">
                                <p> {user.name} </p>
                                <p>{user.lastname} </p>
                                <p>{user.email } </p>
                                <p>{user.password } </p>
                                <input type="submit"  value="Borrar Usuario" />
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
