import { render } from "@testing-library/react";
import './Pokecard.css';
import React, {Component} from "react";
// const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";


// write a function wich helps us to make the "id" three digit
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)
//pedToThree takes a number, if the number is greater or equal than 999 return the number
//othervise adding 00 to number and use "slice" to cut it for 3digit
// exp.: 0023 => 023, 002 => 002 cut the last 3digit


class Pokecard extends Component{
    render() {
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`
        return (
            <div className = "Pokecard">
                <h1 classname = "Pokecard-title">{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name} />
                <div className = "Pokecard-data">Type: {this.props.type}</div>
                <div className = "Pokecard-data">EXP: {this.props.exp}</div>
            </div>
        )
    }
}
export default Pokecard;