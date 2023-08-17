import React from 'react'

export const Card = ({persona}) => {
  return (
    <div>
        <h2>Hola {persona.nombre}</h2>
        <h3>Tu genero musical favorito es: {persona.generoFavorito}</h3>
        <h3>y tu banda favorita es: {persona.bandaFavorita}</h3>
    </div>
  )
}
