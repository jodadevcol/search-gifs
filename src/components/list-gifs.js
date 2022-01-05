import { useEffect, useState } from "react"
import searchGifs from "../api/api.search.gifs"
import Gif from "./gif"

function ListGifs ({ params }) {
  const { keyword } = params
  /*
   * useState - Manejo de estados para los gifs
   * [gifs] : Valor actual del estado
   * [setGifs] : Funcion para la actualización del valor del estado
   */
  const [gifs, setGifs] = useState([])
  /*
   * useEffect - Efecto ejecutado al renderizar el componente
   * [keyword] : Dependencias para la ejecución
   */
  useEffect(function () {
    searchGifs({ keyword })
      .then(gifs => setGifs(gifs))
  }, [keyword])
  
  return (
    <div className="gifs-container"> 
      {
        gifs.map(({ id, title, url }) =>
          <Gif 
            key   = { id }
            id    = { id } 
            title = { title }
            url   = { url }
          />
        )
      }
    </div>
  )
}
export default ListGifs