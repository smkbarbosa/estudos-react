import React, { Component } from "react";

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

    render() { // Toda vez que um componente for renderizado na tela, chama o método render
        return (
            <div>
                
            </div>
        )
    
    }
}

export default Consultas;