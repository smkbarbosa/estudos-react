import React, { Component } from "react";
import { URL_API } from "./../../services/base";

class Resumo extends Component {
    // permite que um componente mais externo passe algum parametro para o componente Resumo através das propriedades (props)
    constructor(props){
        super(props);
        // o estado desse componente está com os mesmos dados que serão recebidos via json.
        this.state = {
            consultas : {
                consultas_30dias_anteiores : 0,
                consultas_30dias_posteriores : 0
            },
            faturamento : {
                anterior : {
                    valor: 0,
                    comparativo : 0
                },
                previsao : {
                    valor: 0,
                    comparativo : 0
                }
            }
        }
    }

    // Metodo de ciclo de vida do componente

    componentDidMount(){
        fetch(URL_API + "/resumo").then(
            resultado => resultado.json().then(
                dados => this.setState(dados)
            )
        );
        //this.setState vai mesclar os parametros com os dados definidos acima
    }

    render() { // Toda vez que um componente for renderizado na tela, chama o método render
        return (
            <div>
      <h2 className="mt-2">Resumo</h2>
 
      <div className="row">
          <div className="col">
              <h3>Consultas</h3>
                         
              <div className="row">
                  <div className="col">
                      <div className="card mt-2 text-center">
                          <div className="card-header">
                              30 dias anteriores
                          </div>
                          <div className="card-body">
                              { this.state.consultas.consultas_30dias_anteiores } 
                          </div>
                      </div>
                  </div>
                  <div className="col">
                      <div className="card mt-2 text-center">
                          <div className="card-header">
                              Próximos 30 dias
                          </div>
                          <div className="card-body">
                              { this.state.consultas.consultas_30dias_posteriores }
                          </div>
                      </div>
                  </div>                            
              </div>
          </div>
          <div className="col">
              <h3>Faturamento</h3>
                         
              <div className="row">
                  <div className="col">
                      <div className="card mt-2 text-center">
                          <div className="card-header">
                              30 dias anteriores
                          </div>
                          <div className="card-body">
                              { this.state.faturamento.anterior.valor.toLocaleString("pt-BR", { style : "currency", 
                                  currency : "BRL"}) }
                              <span className={ "badge ml-1 " + (this.state.faturamento.anterior.comparativo > 0 ? 
                                  "badge-success" : "badge-danger")}>
                                 { this.state.faturamento.anterior.comparativo } %
                              </span>
                          </div>
                      </div>
                  </div>
                  <div className="col">
                      <div className="card mt-2 text-center">
                          <div className="card-header">
                              Próximos 30 dias
                          </div>
                          <div className="card-body">
                              { this.state.faturamento.previsao.valor.toLocaleString("pt-BR", { style : "currency",
                                   currency : "BRL"}) }
                              <span className={ "badge ml-1 " + (this.state.faturamento.previsao.comparativo > 0 ? 
                                   "badge-success" : "badge-danger") }>
                                  { this.state.faturamento.previsao.comparativo } %
                              </span>
                          </div>
                      </div>
                  </div>                            
              </div>
          </div>
      </div>
  </div>
        )
    
    }
}


export default Resumo;