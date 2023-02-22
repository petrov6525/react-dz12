import React, { useState } from 'react'

function Button(props) {

    const buttonClick=()=>{
        props.onClickAct(props.bgColor);
    }

    return (
        <button className='button' style={{ backgroundColor: props.bgColor }}
                onClick={buttonClick}>
            {props.colorText}
        </button>
    );
}


function Block(props){
    return(
        <div style={{backgroundColor:props.bgColor}}>
            Если бы ежики были слонами, мыши были бы котами
        </div>
    );
}

export default function Task1() {

    const [bgColor,setBgColor]=useState("red");

    const setNewBgColor=(bgColor)=>{
        setBgColor(bgColor);
    }

    return (
        <div className='flex-col'>
            <div className='flex'>
                <Button bgColor="red" colorText="Red" onClickAct={setNewBgColor} />
                <Button bgColor="green" colorText="Green" onClickAct={setNewBgColor}  />
                <Button bgColor="blue" colorText="Blue" onClickAct={setNewBgColor}  />
            </div>
            <Block bgColor={bgColor}/>
        </div>
    );
}


