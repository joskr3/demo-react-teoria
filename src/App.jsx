import React from 'react'
import { Route, Switch } from "wouter";
import Detalle from './Vistas/Detalle'
import Home from './Vistas/Home'
import Formularios from './Vistas/Formularios';

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/detalle" component={Detalle} />
      <Route path="/formularios" component={Formularios} />
      {/* Default route in a switch */}
      <Route>404: No se encontro la pagina!</Route>
    </Switch>
  )
}

export default App 
