/* eslint-disable prettier/prettier */
import P from 'prop-types';

import React, { Component } from 'react';
import './App.css';
import { ComboBox } from './components/ComboBox';

class App extends Component {
  state = {
    nome: 'Pedro',
    sobreNome: 'Carvalho',
    contador: 0,
  };

  alterarNome = (e) => {
    this.setState({ nome: e.target.value });
  };

  alterarSobreNome = (e) => {
    this.setState({ sobreNome: e.target.value });
  };

  componentDidMount() {
    console.log('montou o componente');
  }

  componentWillUnmount;

  incrementaContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  };
  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.nome} onChange={this.alterarNome} />
        <br />
        <input type="text" value={this.state.sobreNome} onChange={this.alterarSobreNome}></input>
        <h1>
          Olá, fodão {this.state.nome} {this.state.sobreNome}
        </h1>
        <h3>
          Bem vindo, {this.props.mensagem} {this.props.idade} anos
        </h3>
        <div>
          <span>
            <strong>Contador: {this.state.contador}</strong>
          </span>
          <br />
          <button onClick={this.incrementaContador}> + </button>
        </div>
        <ComboBox />
      </div>
    );
  }
}

App.propTypes = {
  mensagem: P.string,
  idade: P.number,
};

export default App;
