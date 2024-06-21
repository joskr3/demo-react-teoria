import React from 'react'
import Boton from '../components/Boton'
import ConsumirAPI from '../components/ConsumirAPI'
import ConsumirAPIswr from '../components/ConsumirAPIhooks'
import Contador from '../components/Contador'
import ConsumirAPIhookPersonalizado from '../components/CosnumirAPIhookPersonalizado'
import TextoConEstilos from '../components/TextoConEstilos'
import TituloSitio from '../components/TituloSitio'
import { Link } from 'wouter'
import HeaderNav from '../components/HeaderNav'

const Home = () => {
  return (
    <>
      <HeaderNav/>
      <h1>Soy la vista HOME</h1>
      <TituloSitio />
      <TextoConEstilos />
      <Boton texto='Hola mundo , soy un boton' accion={() => alert("hola mundo")} />
      <Contador />
      <ConsumirAPI />
      <p>#######################</p>
      <ConsumirAPIswr />
      <p>--------------------------</p>
      <ConsumirAPIhookPersonalizado />
    </>
  )
}

export default Home
