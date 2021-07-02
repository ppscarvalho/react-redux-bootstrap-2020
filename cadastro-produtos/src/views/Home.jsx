/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Home = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-3">Bem vindo!</h1>
      <p className="lead">
        Esse é o seu sistema, utilize a barra de navegação para acessar as
        páginas.
      </p>
      <hr className="my-4" />
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Cadastrar
        </a>
      </p>
    </div>
  );
};

export default Home;
