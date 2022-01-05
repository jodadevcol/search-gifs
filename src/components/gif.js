import React from "react";

function Gif({ id, key, title, url }){
  return (
    <div className="gif-item" key={id}>
      <h4>{ title }</h4>
      <img alt={ title } src={url} />
    </div>
  )
}

export default Gif