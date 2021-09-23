import React, {useContext, useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext'
import Tabla from './Tabla';


const Information = () => {
    const {state, addTojefe, addToEmployee} = useContext(AppContext)
    const {empleados} = state
    const {employee} = state
    const {jef, ventas_jefe} = state

    const history = useHistory();



    useEffect(() => {
      console.log("employ",empleados);
      console.log("employ",employee);


      if(empleados.length > 0){
        conocer_jefe()

      }
    },[empleados, employee])
    
    function conocer_jefe(){
      let emp =empleados[0]      
      var jefe = []
      for (let i = 0; i < emp.length; i++) {
            for (let clave in emp[i]){
              if (clave === 'employee_number'){
                let numEmpleado = emp[i][clave]
                if(numEmpleado === employee[0].number_jefe){
                  addTojefe(emp[i])
                }else{
                    // jefe = []
                }
              }
            }
          }
    }

    const verPerfil = (id) => {
      let emple = empleados[0]
      for (let i = 0; i < emple.length; i++) {
        for (let clave in emple[i]){
          if (clave === 'id'){
            let numId = emple[i][clave]
            if(numId === id){
              console.log(emple[i])
              employee[0] = emple[i]
              console.log("El nuevo empleado es:", employee[0].names)

            }

          }

        }
      }
      
      conocer_jefe()
    }
    return(
            <div>
              {employee.length > 0 && 
                <div className="col-8 col-sm-6 container border p-0 border-dark">
                
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
                                <div>
                                  {employee[0].ventas_2019> 0 &&
                                    <p className="p-1 bg-success text-white">$ {employee[0].ventas_2019}</p>
                                  }                          

                                </div>

                            </div>
                        
                        </div>
                    </div>
                    <h6>Telefono: {employee[0].phone_number}</h6>
                    <h6>email: {employee[0].email}</h6>
                    <h6>Fecha de nacimiento: {employee[0].birthdate}</h6>
                    <h6>Cedula: {employee[0].cedula}</h6>
                    <h6>Fecha de ingreso: {employee[0].created}</h6>
                    {jef.length >0  &&
                        <p type="button" onClick={()=>verPerfil(jef[0].id)}>jefe: {jef[0].names}</p>
                    }                    
                </div>
                <Tabla conocer_jefe={conocer_jefe}/>
              </div>
              }
            </div>
          )


          
}

export default Information