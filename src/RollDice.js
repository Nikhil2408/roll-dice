import React, {Component} from "react";
import Dice from "./Dice";
import "./styles/RollDice.css";

class RollDice extends Component{
    constructor(props){
        super(props);
        this.state = {
            dice1Num : 1,
            dice2Num: 4
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.setState(
            {
                dice1Num : Math.floor(Math.random() * 6) + 1,
                dice2Num : Math.floor(Math.random() * 6) + 1
            }
        );
    }

    render(){
        return (
            <div className="RollDice">
                <Dice dice1 = {this.state.dice1Num} dice2 = {this.state.dice2Num}/>
                <button onClick = {this.clickHandler} class="RollDice-btn">Roll Dice!</button>
            </div>
        )
    }
}

export default RollDice;