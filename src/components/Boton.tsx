// import React from 'react'

// interface Props {
//   texto: string
//   accion: () => void
// }

// const Boton = ({ texto, accion }: Props) => {
//   return (
//     <button type='button' onClick={accion}>
//       {texto}
//     </button>
//   )
// }

// export default Boton


// import React from 'react'

// interface BotonProps {
//   texto: string
//   accion: () => void
// }


// const Boton = (propiedades: BotonProps) => {

//   return (
//     <div>{ propiedades.texto }</div>
//   )
// }

// export default Boton

import React from 'react'

interface BotonProps {
  texto: string
  accion: () => void
}


const Boton = (propiedades: BotonProps) => {

  const { texto, accion } = propiedades

  return (
    <div>{texto}</div>
  )
}

export default Boton
