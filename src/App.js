import React from 'react'
import ReactDOM from 'react-dom'

function Hello(props){
    return <h1>hello, {props.name}</h1> // element안에 있는 속성을 객체로 받아 출력이 가능하다.
}                               
const element = <Hello name="arara" />       

ReactDOM.render(element, document.getElementById("root"));

export default Hello

// 전체 셋팅은 rfce