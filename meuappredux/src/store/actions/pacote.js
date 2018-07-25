
export const ADD_PACOTE = 'ADD_PACOTE'

export const adicionaPacote = (id, nome) => ({
    type: ADD_PACOTE,
    payload: { id, nome }
})