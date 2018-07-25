import { createStore } from 'redux'

const ADD_PACOTE = 'ADD_PACOTE'

function pacote(state = [], action){
    switch(action.type){
        case ADD_PACOTE:
            return state.concat(action.payload) //o payload é um valor que a gente passa junto com a ação que queremos executar
        default:
            return state
    }
}

const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch(adicionaPacote(1, 'nome do pacote'))
store.dispatch(adicionaPacote(2, 'nome do pacote'))