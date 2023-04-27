import {useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getPokemons } from "../../Redux/actions";
import Card from "../Card/Card";
import style from "./Cards.module.css";
export default function Cards (){

    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.allPokemon);
    console.log(pokemons);

    useEffect(()=>{
        dispatch(getPokemons())
    },[])
    return(
        <div className={style.cards_container}>
            {pokemons.map(({id,name,Types,imgCard}) =>{
            return <Card key={id}
            id={id}
            name = {name}
            Types = {Types}
            imgCard = {imgCard}
            />
         })}
        </div>
    )
}