import React , { createContext, useReducer } from "react";
import ProductObject from "./components/ProductJson";
import {AdditionalService} from "./components/ProductJson";
import {delivery}from './components/ProductJson'



const InputContext = createContext({});
 const initialvalue  =  ProductObject
 const serviceInitialvalue = AdditionalService
 const deliveryInitialvalue = delivery
 
const reducer =(state,action)=>{
    
    switch(action.type){
        case 'QUANTITY':
            return state.map((c)=>{
                return c.id === action.payload.id ? {...c , quantity : action.payload.qty ,total:action.payload.total} : {...c}
            }) 
        default:
             return state
    }
}

const servicereducer =(servicestate,action)=>{
        switch (action.type){
            case 'SERVICE':
                return servicestate.map((s)=>{
                    return s.id === action.payload.id ? {...s, checked:!action.payload.checked, includecharges: !action.payload.checked ? action.payload.amount:'' }:{...s, checked:false ,includecharges:''}
                })
                default :
                  return servicestate
        }
    } 
const deliveryreducer = (deliverystate,action)=>{
    console.log(deliverystate)
    switch(action.type){
        case 'DELIVERY':
            return deliverystate.map((d)=>{
                return d.id === action.payload.id ? {...d, checked:!action.payload.checked}:{...d,checked:false}
            })
             default:
                return deliverystate
           
    }
}

export const InputProvider =({children})=> {
    const[count,dispatch] = useReducer(reducer,initialvalue)
    const[oncount,ondispatch] = useReducer(servicereducer,serviceInitialvalue)
    const[deliverycount,deliverydispatch] = useReducer(deliveryreducer,deliveryInitialvalue)
    return (
        <InputContext.Provider value={{count,dispatch,oncount,ondispatch,deliverycount,deliverydispatch}}>{children}</InputContext.Provider>
    )
}





export default InputContext