import React, { useState, useEffect } from 'react'


const Usuario = () => {

  const [personajes, setPersonajes] = useState([])


  const obtenerDatos = async () => {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await data.json()
      setPersonajes(users)
      console.log(users)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    obtenerDatos()
  }, [])

  return (
    <div className=' container py-5'>
      <h1 className='py-5 text-center'>Consumir Api - Usuario</h1>
      <div className='row'>
        {
          personajes.map(item => (
            <div className='col my-3' key={item.id}>
              <>
                <div className="card card text-center" style={{width: '18rem'}}>
                <div class="card-header">
                  Datos Personales
                </div>
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Usuario: {item.username}</h6>
                    <p className="card-text">Email: {item.email}</p>
                    <p className="card-text">Direccion:</p>
                    <p className="card-text">Calle: {item.address.street}</p>
                    <p className="card-text"> Apto.: {item.address.suite}</p>
                    <p className="card-text">Ciudad: {item.address.city}</p>
                    <p className="card-text">ZipCode: {item.address.zipcode}</p>
                    <p className="card-text">Empresa: {item.company.name}</p>
                  </div>
                </div>
              </>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Usuario
