import { useState } from 'react'
import './App.css'
import { Card } from './component/Card'

function App() {

  const [persona, setPersona] = useState({
    nombre:'',
    generoFavorito:'',
    bandaFavorita:''
  })

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(persona.nombre.length >=3 && persona.generoFavorito.length >=6){
      setError(false);
      setShow(true);
    }
    else{
      setError(true);
    }

  } 

  return (
    <>
    <form onSubmit={event => handleSubmit(event)}>
      <label>Ingrese su nombre</label>
      <input type='text' value={persona.nombre} 
          onChange={(event) => setPersona({...persona, nombre: event.target.value})}/>
      <br />
      <br />

      <label>Indique cual es su genero musical preferido</label>
      <input type="text" value={persona.generoFavorito} 
          onChange={(event) => setPersona({...persona, generoFavorito: event.target.value})}/>
      <br />
      <br />

      <label>Indique cual es su banda favorita</label>
      <input type='text' value={persona.bandaFavorita} 
          onChange={(event) => setPersona({...persona, bandaFavorita: event.target.value})}/>
      <br />
      <br />

      <button type='submit' >Guardar</button>
    </form>
    <br />
      {show && <Card persona={persona} />}
      {error && <h3 style={{color:'red'}}>Por favor chequea que la información sea correcta</h3> }
    </>
  )
}

export default App
