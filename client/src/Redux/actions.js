import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";

export const getPokemons = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/pokemons')
            .then((response) => {
                return dispatch({
                    type: GET_POKEMONS,
                    payload: response.data,
                })
            })
    }
}