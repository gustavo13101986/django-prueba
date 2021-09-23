import React, {useEffect, useContext} from 'react';
import AppContext from '../context/AppContext';
import Information from '../components/Information';
import axios from "axios";


const Container = () => {
    const URL = 'http://localhost:8000/api/employee/'
    const {state, addToAllEmployees, } = useContext(AppContext)
    const {tok, empleados} = state
    let token = tok[0]


    const fetchData = async () => {
      try {
        let res = await axios.get(URL, { headers: {"Authorization" : `Bearer ${token}`} })
        var response = res.data;
        await addToAllEmployees(res.data)  
      }catch(error) {
          console.log(error)
      }
  
  }

  
    useEffect(() => {
        fetchData();
    },[])

    return(
        <>{empleados &&
            <Information/>
          }
        </>

    )
}

export default Container