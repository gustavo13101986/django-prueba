import React, {useContext, useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import axios from "axios";


const Home = () => {
    const [empleados, setEmpleados]= useState([])

    const history = useHistory();
    var jefe = []
    var subalternos= []
    var listaSubalternos = []
    let subAlt = []


    const {state, addToAllEmployees, addToEmployee} = useContext(AppContext)
    const {employee} = state
    const {tok} = state

    

    function conocerJefe() {
      for (let i = 0; i < empleados.length; i++) {
        jefe = (empleados[i])
        for (let clave in jefe){
          if (clave === 'employee_number'){
            let numEmpleado = jefe[clave]
            if(numEmpleado === employee[0].number_jefe){
            }

          }

        }
      }
      for (let i = 0; i < empleados.length; i++) {
        subalternos = (empleados[i])
        for (let clave in subalternos){
          if (clave === 'number_jefe'){
            let numJefe = subalternos[clave]
            if(numJefe === employee[0].employee_number){
              listaSubalternos.push(subalternos)
            }
          }
        }
        
      }
  }

    const pefilJefe = () => {
      employee[0] = jefe
      history.push('/home')
      conocerJefe()

    }

    const verPerfil = (id) => {
      for (let i = 0; i < empleados.length; i++) {
        subAlt  = (listaSubalternos[i])
        for (let clave in subAlt){
          if (clave === 'id'){
            let numId = subAlt[clave]
            if(numId === id){
              employee[0] = subAlt

            }

          }

        }
      }
      history.push('/home')
      conocerJefe()
    }
      
          return (
            <>
              {employee.length > 0 &&
                <div className="col-8 col-sm-6 container border p-0 border-dark">
                {empleados.length > 0 &&
                  conocerJefe()
                }
                <h1 className='p-2 bg-dark text-warning'k>S.U.Logistics</h1>
                <div className="container">
                    <h4>Perfil de usuario</h4>
                    <h4>{employee[0].names}</h4>
                    <h4>{employee[0].employee_number}</h4>
                    <div>
                        <div className="row">
                            <div className="col">
                                <img  src={employee[0].picture} width="150"/>
                            </div>
                            <div className="col">
                                <h5>{employee[0].employee_title}</h5>
                                <h5>Zona, {employee[0].zona}</h5>
                                <p>{employee[0].municipio}, {employee[0].departamento}</p>
                                <p className="p-2 bg-success text-white">$ {employee[0].ventas_2019}</p>

                            </div>
                        
                        </div>
                    </div>
                    <h6>Telefono: {employee[0].phone_number}</h6>
                    <h6>email: {employee[0].email}</h6>
                    <h6>Fecha de nacimiento: {employee[0].birthdate}</h6>
                    <h6>Cedula: {employee[0].cedula}</h6>
                    <h6>Fecha de ingreso: {employee[0].created}</h6>
                    <a className="text-primary" type="button" onClick={pefilJefe}>
                      <h6>jefe: {jefe.names}</h6>
                    </a>
                    <h3>Subalternos</h3>
                    <div className="container">
                    <table className="table">
                    <tr className="bg-dark text-white">
                        <th>Nombre</th>
                        <th>Ventas</th>
                    </tr>
                    {
                        listaSubalternos.map(listaSubalterno => {
                            return (
                                <tr key={listaSubalterno.id}>
                                    <td className="text-primary" type="button" onClick={()=>verPerfil(listaSubalterno.id)}>{listaSubalterno.names}</td>
                                    <td>{listaSubalterno.ventas_2019}</td>
                                 
                                    
                                </tr>
                                  )
                              })
                          }
                    </table>

                    </div>
                </div>
              </div>
              }
            </>
          )
}

export default Home