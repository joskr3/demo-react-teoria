import React from 'react'
import useFetch from '../hooks/useFetch'

const ConsumirAPIhookPersonalizado = () => {

  const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
  const {data} = useFetch(url)

  return (
    <div>
      {data?.name}
    </div>
  )
}

export default ConsumirAPIhookPersonalizado
