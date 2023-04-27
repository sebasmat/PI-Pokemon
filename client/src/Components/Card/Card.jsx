import style from "./Card.module.css";

export default function Card({id,name,Types,imgCard}){
    
    return (
        <div className={style.card} >
            <h2>id:{id} </h2>
            <h2>name:{name} </h2>
            <img src={imgCard} alt='ImagenPokemon'/>
        </div>
    )
}