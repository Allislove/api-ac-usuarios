import React from 'react';
import './App.css';
import Form from './components/form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: {}
      // Creo un objeto vacio para meter los usuarios de la API
    }
  }

    //Se ejecuta cuando se renderiza este componente
    componentDidMount(){
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'https://academlo-api-users.herokuapp.com/users';
        fetch(proxyUrl + targetUrl)
            .then(blob => blob.json())
            .then(data => {
                console.table(data); // lo imprimo en una tabla
                this.setState({usuarios: data});
                console.log(data)
                return data;
            })
            .catch(e => {
                console.log(e);
                return e;
            });
    }

  render() {
    return (
        <div className="App">
            <h1> Hello World </h1>


            <p> Usuario: {this.state.usuarios.name} </p>
            {/*console.log({this.state.usuarios.data});*/}

            {/*console.log({this.state.usuarios.name});*/}
            <Form />
        </div>
    );

  }

}

export default App;
