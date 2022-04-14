import React, {Component} from "react";
import "./styles/Dice.css"

class Dice extends Component{
    render(){
        const obj = {
            1 : "one",
            2 : "two",
            3 : "three",
            4 : "four",
            5 : "five",
            6 : "six"
        };
        let dice1Num = this.props.dice1;
        let dice2Num = this.props.dice2;
        let dice1Class = "fa-dice-" +  obj[dice1Num];
        let dice2Class = "fa-dice-" + obj[dice2Num];
        return (
            <div className="Dice">
                <i class={`fa-solid fa-3x ${dice1Class}`}></i>
                <i class={`fa-solid fa-3x ${dice2Class}`}></i>
            </div>
        )
    }
}


export default Dice;