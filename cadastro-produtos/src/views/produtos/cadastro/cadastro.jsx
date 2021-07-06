import "./style.css";

import React, { Component } from "react";
import ProdutoService from "../../../app/produtoService";
import { withRouter } from "react-router-dom";

const estadoInicial = {
  nome: "",
  sku: "",
  descricao: "",
  preco: 0.0,
  fornecedor: "",
  sucesso: false,
  errors: [],
};

class CadastroProduto extends Component {
  constructor() {
    super();

    this.service = new ProdutoService();
  }

  state = estadoInicial;

  onChangeHandler = (event) => {
    const valor = event.target.value;
    const nomeDoCampo = event.target.name;
    this.setState({ [nomeDoCampo]: valor });
  };

  onSubmitHandler = (event) => {
    const produto = {
      nome: this.state.nome,
      sku: this.state.sku,
      descricao: this.state.descricao,
      preco: this.state.preco,
      fornecedor: this.state.fornecedor,
    };

    try {
      this.service.salvar(produto);
      this.limpaCamposHandler();
      this.setState({ sucesso: true });
    } catch (erro) {
      const errors = erro.errors;
      this.setState({ errors: errors });
    }
  };

  limpaCamposHandler = () => {
    this.setState(estadoInicial);
  };

  componentDidMount() {
    const sku = this.props.match.params.sku;
    if (sku) {
      const result = this.service.obterProdutos().filter((p) => p.sku === sku);
      if (result.length === 1) {
        const produtoEncontrado = result[0];
        this.setState({ ...produtoEncontrado });
      }
    } else {
      this.limpaCamposHandler();
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">Cadastro de Produto</div>
        <div className="card-body">
          {this.state.sucesso && (
            <div className="alert alert-dismissible alert-success">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
              ></button>
              <strong>Atenção!</strong> Cadastro realizado com sucesso.
            </div>
          )}

          {this.state.errors.length > 0 &&
            this.state.errors.map((msg) => {
              return (
                <div className="alert alert-dismissible alert-danger">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                  ></button>
                  <strong>Erro!</strong> {msg}.
                </div>
              );
            })}

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="">Nome: *</label>
                <input
                  type="text"
                  name="nome"
                  className="form-control"
                  placeholder="Informe o nome do produto"
                  value={this.state.nome}
                  onChange={this.onChangeHandler}
                />
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="">SKU: *</label>
              <input
                type="text"
                name="sku"
                className="form-control"
                placeholder="Informe o SKU do produto"
                value={this.state.sku}
                onChange={this.onChangeHandler}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="">Descrição: </label>
                <textarea
                  className="form-control"
                  name="descricao"
                  placeholder="Informe a descrição do produto"
                  value={this.state.descricao}
                  onChange={this.onChangeHandler}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="">Preço: *</label>
                <input
                  type="text"
                  name="preco"
                  className="form-control"
                  placeholder="Informe o preço do produo"
                  value={this.state.preco}
                  onChange={this.onChangeHandler}
                />
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="">Fornecedor: *</label>
              <input
                type="text"
                name="fornecedor"
                className="form-control"
                placeholder="Informe o nome do fornecedor"
                value={this.state.fornecedor}
                onChange={this.onChangeHandler}
              />
            </div>
          </div>

          <div className="row botoes">
            <div className="col-md-1">
              <button
                className="btn btn-success"
                onClick={this.onSubmitHandler}
              >
                Salvar
              </button>
            </div>
            <div className="col-md-1">
              <button
                className="btn btn-primary"
                onClick={this.limpaCamposHandler}
              >
                Limpar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CadastroProduto);
