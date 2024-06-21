

// use -> son hooks (funciones especiales de react)
// useState -> usar  el estado local , de mi componente

import React, { useState } from 'react'


const Contador = () => {

  const [contador, setContador] = useState(0)

  //const {valor1 , valor2} = props

  return (
    <>
      <h1>{contador}</h1>
      <button type='button' onClick={() => { setContador(contador + 1) }} >Actualizar valor</button>
    </>
  )
}

export default Contador
