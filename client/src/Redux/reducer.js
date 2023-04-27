import { GET_POKEMONS } from "./actions";

const initialState = {
    allPokemon: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return { ...state, allPokemon:action.payload};
        default:
            return { ...state };
    }
}

export default reducer;