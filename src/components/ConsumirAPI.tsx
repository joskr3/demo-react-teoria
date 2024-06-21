import React, { useState, useEffect } from 'react'

//useEffect -> 

// componentes puros y componentes impuros

// componente puro -> cuando no usas useeffect, temas de efecto 

// efecto -> todo aquello que salga de la logoca de react 

// efecto -> consumo de un API

// compoente impuro -> cuando hago cosas como consumir un API , y me salgo del flujo normal de React


const ConsumirAPI = () => {

  const [data, setData] = useState({
    name: '',
    abilities: [{
      "ability": {
        "name": "",
        "url": ""
      },
      "is_hidden": false,
      "slot": 1
    }],
  })

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(respuesta => respuesta.json())
      .then(data => setData(data))
  }, [])

  
  return (
    <>
      <div>ConsumirAPI</div>

      {
        <p>
          {data?.name}
        </p>
      }

      {
        data?.abilities.map((ability,index) => <li key={index}>{ ability?.ability.name}</li>)
      }

    </>

  )
}

export default ConsumirAPI
