import React from 'react'
import '../index.css'
import { Link } from 'wouter'
import { useLocation } from "wouter";

const HeaderNav = () => {
  const [location, setLocation] = useLocation();

  return (
    <nav >
      <a onClick={() => setLocation("/")}>LOGO</a>
      <Link href="/">Home</Link>
      <Link href="/detalle">Detalle</Link>
      <Link href="/formularios">Formularios</Link>
    </nav>
  )
}

export default HeaderNav
