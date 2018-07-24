import React, { Component } from "react";
import { URL_API } from "./../../services/base";

class Consultas extends Component {
    // permite que um componente mais externo passe algum parametro para o componente Resumo através das propriedades (props)
    constructor(props){
        super(props);
        // o estado desse componente está com os mesmos dados que serão recebidos via json.
        this.state = {
            realizadas : [],
            marcadas : []
            };
        }

    componentDidMount(){
        fetch(URL_API + "/consultas").then(
            resultado => resultado.json().then(
                dados => this.setState(dados)
            )
        );
        //this.setState vai mesclar os parametros com os dados definidos acima
    }

    render() { // Toda vez que um componente for renderizado na tela, chama o método render
        return (
            
            <div>
    <h2 className="mt-2">Consultas</h2>

    <div className="row">
        <div className="col">
            <div className="card mt-2">
                <div className="card-header">
                    Realizadas
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Especialidade</th>
                            <th>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                         this.state.realizadas.map((item, indice) => {
                          return (
                           <tr key={indice}>
                             <td>{item.especialidade}</td>
                             <td>{item.quantidade}</td>
                           </tr>
                           )
                         })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        <div className="col">
            <div className="card mt-2">
                <div className="card-header">
                    Marcadas
                </div>
                <table className="table">
                <thead>
                    <tr>
                        <th>Especialidade</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                 {
                  this.state.marcadas.map((item, indice) => {
                   return (
                     <tr key={indice}>
                       <td>{item.especialidade}</td>
                       <td>{item.quantidade}</td>
                     </tr>
                   )
                  })
                 }
                </tbody>
            </table>
            </div>
        </div>
    </div>
</div>
                
          
        )
    
    }
}

export default Consultas;