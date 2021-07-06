import React, { Component } from "react";
import ProdutoService from "../../../app/produtoService";
import { withRouter } from "react-router-dom";

export class ConsultaProdutos extends Component {
  constructor() {
    super();
    this.service = new ProdutoService();
  }

  state = {
    produtos: [],
  };

  componentDidMount() {
    const produtos = this.service.obterProdutos();
    this.setState({ produtos });
  }

  preparaEditar = (sku) => {
    this.props.history.push(`/cadastro-produtos/${sku}`);
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">Consulta de Produtos</div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">SKU</th>
                <th scope="col">Preço</th>
                <th scope="col">Fornecedor</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.produtos.map((produto, index) => {
                return (
                  <tr key={index}>
                    <th>{produto.nome}</th>
                    <td>{produto.sku}</td>
                    <td>{produto.preco}</td>
                    <td>{produto.fornecedor}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => this.preparaEditar(produto.sku)}
                      >
                        Editar
                      </button>
                      <button className="btn btn-danger">Remover</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withRouter(ConsultaProdutos);
