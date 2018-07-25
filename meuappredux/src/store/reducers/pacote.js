import { ADD_PACOTE } from '../actions'

export default function pacote(state = [], action) {
    switch(action.type){
        case ADD_PACOTE:
            return state.concat(action.payload) //o payload é um valor que a gente passa junto com a ação que queremos executar
        default:
            return state
    }
}