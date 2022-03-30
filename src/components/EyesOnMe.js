import React from "react"

function EyesOnMe()
function focus() {
    return (
      <input
        onFocus={() => {
          console.log('Good');
        }}
        placeholder="onFocus is triggered when you click this input."
      />
    )
  }
  function blur(){
    return (
        <input
          onBlur={() => {
            console.log('Hey! Eyes on me!');
          }}
          placeholder="onBlur is triggered when you click this input and then you click outside of it."
        />
      )
  }
  
{
    return (
        <button onFocus={focus} onBlur={blur}></button>
    )
}

export default EyesOnMe;