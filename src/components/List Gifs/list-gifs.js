import { useEffect, useState } from "react"
import searchGifs from "../../api/api.search.gifs"
import Gif from "../Gif/gif"

function ListGifs ({ params }) {
  const { keyword } = params
  const [loading, setLoading] = useState(false)
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
    setLoading(true)
    searchGifs({ keyword })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      })
  }, [keyword])

  if (loading) return <div><span>Cargando...</span></div>
  
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