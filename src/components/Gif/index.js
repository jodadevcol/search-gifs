import React from "react";

function Gif({ id, key, title, url }){
  return (
    <div className="gif-item" key={key}>
      <h4>{ title }</h4>
      <img alt={ title } src={url} />
    </div>
  )
}

export default Gif