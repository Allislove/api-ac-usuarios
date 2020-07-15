import React from 'react';
import './App.css';
import Form from './components/form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        usuarios: [] // Creo un array vacio para meter los usuarios de la API
    }

  }

  // Obtengo los datos de la api

    componentDidMount(){
        /* let proxyUrl = 'https://cors-anywhere.herokuapp.com/', Era un proxy para poder
        acceder a la api:ya no tengo necesidad de
         esto,
         porque se arreglo desde la api
        targetUrl = 'https://academlo-api-users.herokuapp.com/users'; */
        let url = 'https://academlo-api-users.herokuapp.com/users';
        fetch(url)
            .then((response) => {
                return response.json();
                // console.log(response)
            })
            .then((myJson) => {
                this.setState({usuarios: myJson.data});
                console.log(myJson)
            })
            .catch(error => console.log(error));
    }

    
  render() {
    return (
        <div className="App">
            <h1> API - ADD USERS </h1>
            <Form />
            <div>
                {this.state.usuarios.map(user => {
                    return (
                        <div>
                            <b>{user.name+ " "}</b>
                            <b>{user.lastname + " "}</b>
                            <b>{user.email + " "} </b>
                            <b>{user.password + " "}</b> <br/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
  }
}

export default App;
