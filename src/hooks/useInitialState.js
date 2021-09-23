import {useState} from 'react';
import initialState from '../initialState'


const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addTojefe = payload => {
        setState({
            ...state,
            jef: [...state.jef, payload]
        })
    }

    const addToVentasJefe = payload => {
        setState({
            ...state,
            ventas_jefe: [...state.ventas_jefe, payload]
        })
    }

    const addToEmployee = payload => {
        setState({
            ...state,
            employee: [...state.employee, payload]
        })
    }

    const addToToken = payload => {
        setState({
            ...state,
            tok: [...state.tok, payload]
        })
    }

    const addToAllEmployees = payload => {
        setState({
            ...state,
            empleados: [...state.empleados, payload]
        })
    }

    return {
        addTojefe,
        addToEmployee,
        addToToken,
        addToAllEmployees,
        addToVentasJefe,
        state,
    }

}

export default useInitialState