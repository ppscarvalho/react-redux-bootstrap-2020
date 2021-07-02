import "./style.css";

import React, { Component } from "react";

class CadastroProduto extends Component {
  state = {
    nome: "",
    sku: "",
    descricao: "",
    preco: 0.0,
    fornecedor: "",
  };

  onChangeHandle = (event) => {
    const valor = event.target.value;
    const nomeDoCampo = event.target.name;
    this.setState({ [nomeDoCampo]: valor });
  };

  onSubmitHandle = (event) => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">Cadastro de Produto</div>
        <div className="card-body">
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
                  onChange={this.onChangeHandle}
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
                onChange={this.onChangeHandle}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="">Descrição: *</label>
                <textarea
                  className="form-control"
                  name="descricao"
                  placeholder="Informe a descrição do produto"
                  value={this.state.descricao}
                  onChange={this.onChangeHandle}
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
                  onChange={this.onChangeHandle}
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
                onChange={this.onChangeHandle}
              />
            </div>
          </div>

          <div className="row botoes">
            <div className="col-md-1">
              <button className="btn btn-success" onClick={this.onSubmitHandle}>
                Salvar
              </button>
            </div>
            <div className="col-md-1">
              <button className="btn btn-primary">Limpar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CadastroProduto;
