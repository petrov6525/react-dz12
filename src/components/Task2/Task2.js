import React from "react";


class Button extends React.Component {
    render() {
        const buttonClick=()=>{
            this.props.onClickAct(this.props.bgColor);
        }
        return (
            <button className="button"
                    style={{backgroundColor:this.props.bgColor}}
                    onClick={buttonClick}>
                {this.props.ColorName}
            </button>
        );

    }
}


class Block extends React.Component{
    render(){
        return(
            <div style={{backgroundColor:this.props.bgColor}}>
                Если бы ежики были слонами, мыши были бы котами
            </div>
        );
    }
}



export default class Task2 extends React.Component {
    constructor() {
        super();
        this.state = { bgColor: "red" };
    }
    render() {
        const setBgColorFunc = (bgColor) => {
            this.setState({ bgColor: bgColor });
        };
        return (
            <div className="flex-col">
                <div className="flex">
                    <Button bgColor="red" ColorName="Red" onClickAct={setBgColorFunc} />
                    <Button bgColor="green" ColorName="Green" onClickAct={setBgColorFunc} />
                    <Button bgColor="blue" ColorName="Blue" onClickAct={setBgColorFunc} />
                </div>
                <Block bgColor={this.state.bgColor}/>
            </div>

        );
    }
}