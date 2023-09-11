import React from "react";
import { useState } from "react";





const Cards = () => {

    const [pokemon, setPokemon] = useState ({name:"", id:"",img:""})
   

    const fetchData = async () => {
        try {
            const request = await fetch(`https://pokeapi.co/api/v2/pokemon/10`)
            const data = await request.json()
            console.log(data)
            setPokemon({name:`${data.name}`, id:`${data.id}`, img:`${data.sprites.back_default}`})
            console.log(pokemon)
          
        } catch (error) {
          console.log(error)
        }
      }

    return (
        <div className="d-flex justify-content-center">

                    <div className="card ">
                        <img className="card-img-top" src="\src\img\tiranitar.png" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">(${})</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Buscar random</a>
                        </div>
                    </div>
       </div>
    )
}
export default Cards;