

import React from 'react'
import ReactDOM from 'react-dom'

function Hello(props){
return(
  <div>
  <div>{name.name}</div>
  <div>{name.text}</div>
  <div>{name.author.name}</div>
  <div>{name.author.url}</div>
</div>

)

}

const name = {
  name : "noji",
  text : "hello",
  author : {
    name : "baby",
    url : "naver.com"
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello title1={name.name} text={name.text} name={name.author.name} url={name.author.url} />)