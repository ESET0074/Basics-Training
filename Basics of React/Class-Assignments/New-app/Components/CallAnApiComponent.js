import React from 'react'

export default function CallAnApiComponent() {

    const getData = ()=>{
        let a = fetch("https://jsonplaceholder.typicode.com/posts")
        .then((data)=>data.json())
        .then((jsonData)=>console.log(jsonData))
    }
  return (
    <div>
      <button onClick={()=>{getData()}}>load data</button>
    </div>
  )
}
