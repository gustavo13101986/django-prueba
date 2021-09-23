import React, {useContext, useEffect} from 'react';
import AppContext from '../context/AppContext'


const Tabla = ({conocer_jefe}) => {
    const {state} = useContext(AppContext)
    const {empleados} = state
    const {employee, ventas_jefe} = state
    listaSubalternos = []
    var contador = 0
    var ven = 0

    useEffect(() => {
      console.log(empleados);
      console.log(employee);

    },[empleados, employee])


    let listaSubalternos = []

    function conocer_subalternos(){
     
        let ventas = 0
        let emple = empleados[0]

        if(empleados.length > 0 ){
          for (let i = 0; i < emple.length; i++) {
            for (let clave in emple[i]){
                if (clave === 'number_jefe'){
                  let num_jefe = emple[i][clave]
                  if(num_jefe  === employee[0].employee_number){
                    
                      listaSubalternos.push(emple[i])
                    }
                  }
                }
              }
              listaSubalternos.map(ls=> {
                console.log(ls.ventas_2019)
                ven = ls.ventas_2019 + ven

              })
              ventas_jefe.push(ven)
              console.log("ventas jefe",ventas_jefe[0])
              
      }
      }

    conocer_subalternos()

    const verPerfil = (id, count) => {
      console.log(count)
      for (let i = 0; i < count; i++) {
          console.log(id)
          let subAlt  = (listaSubalternos[i])
          for (let clave in subAlt){
            if (clave === 'id'){
              let numId = subAlt[clave]
              if(numId === id){
                employee[0] = subAlt
  
              }
  
            }
  
          }
        }
        console.log("El nuevo empleado es:", employee[0])
        conocer_jefe()
        conocer_subalternos()

      }

    return(
      <div className="container">    
        {employee[0].ventas_2019 == null &&
           <p className="p-1 bg-success text-white">Ventas jefe: $ {ventas_jefe[0]}</p>
        } 
           <h3>Subalternos</h3>

            <table className="table">
            <tr className="bg-dark text-white">
                <th>Nombre</th>
                <th>Ventas</th>
            </tr>
            {
                listaSubalternos.map(listaSubalterno => {
                    return (
                        <tr key={listaSubalterno.id}>
                          {
                            contador = contador+ 1
                          }
                            <td className="text-primary" type="button" onClick={()=>verPerfil(listaSubalterno.id, contador)}>{listaSubalterno.names}</td>
                            <td>{listaSubalterno.ventas_2019}</td>
                            
                            
                        </tr>
                            )
                        })
                    }
            </table>
            <div></div>
            </div>

    )
}

export default Tabla