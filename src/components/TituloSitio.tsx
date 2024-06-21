import React from 'react'


const funcionTexto = () => {
  console.log("Devuelve un valor tipo texto ,y retorna un valor de tipo texto ")
  return "Soy un tipo texto"
}

const funcionNumero = () => {
  console.log("Devuelve un valor numerico ,y retorna un valor de tipo numerico ")
  return 0
}

const funcionBool = () => {
  console.log("Devuelve un valor booleano ,y retorna un valor de tipo booleano ")
  return true
}


const funcionVacia = () => {
  // alert("J")
  // ejecutar una llamada a la base de datos
  console.log("Ni devuelvo nada , pero ejecuto una accion ")
}


const TituloSitio = () => {

  // const miValorTexto = funcionTexto()

  // const miValorNoDefinido = funcionVacia()

  // console.log(miValorTexto)

  // console.log(miValorNoDefinido,"VALOR NO DEFINIDO")

  return (
    <div>TituloSitio</div>
  )
}

export default TituloSitio
