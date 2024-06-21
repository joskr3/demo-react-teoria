import { useEffect, useState } from "react"

// useFetch , es un hook(funcion) personalizada , que nos permite hacer consultas a APIs , pasandole como parametro la url
const useFetch = (url: string) => {

  // necesitamos un lugar donde guardar la data que llega de la conuslta  a la API
  // para eso usamos el estado(useState), y sus dos valores , el valor actual y la funcion que me permite actualizar nese valor, null en este caso es el valor por defecto de data
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      // fetch es una funcionalidad nativa de js, con la que hacemos la consulta propieamnete dicha , y es una promesa , por eso es que usamos then y catch , para resolver sus valores
      // cuando obtenenos el valor , lo transformamos a json y posterioremente lo usaremos , al asiganrlo en neustra funcion actualizadora de estado(setData)
      fetch(url)
        .then(res => res.json())
        .then(result => setData(result))
        .catch(e => console.error(e))
    } catch (error) {
      console.error(error)
    }
    return (() => {
      setData(null)
    })
  }, []);
  // [] -> array de dependencias , [valor1] -> el useffect se volvera a actualizar cada vez que valor1 cambie
  // [] -> si esta vacio se ejecuta cuando la pagina cargue
  // useffect , recibe dos valores -> una funcion y el array de dependencias
  // useeffect(funcion,[])

  // el return dentro del useEffect -> se llama funcion de limpieza y su funcion es la de "limpiar" los valores y/efectos , que pasan cuando usamos el useeffect

  // el valor final del hook personalizado useFetch es data
  return { data }
}

export default useFetch
