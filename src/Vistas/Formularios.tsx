import React, { useState } from 'react'
import HeaderNav from '../components/HeaderNav'

const Formularios = () => {

  const [nombre, setNombre] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Lo que se envio fue : ${nombre}`)
  }
  
  const handleChange = (event) => {
    setNombre(event.target.value)
  }

  return (
    <>
      <HeaderNav />
      <form onSubmit={handleSubmit}>
        <label>
          Nombre: <input type='text' value={nombre} onChange={handleChange} />
        </label>
        <button type='submit'>Enviar</button>
      </form>
    </>
  )
}

export default Formularios
