// import {delivery} from './components/ProductJson'
// const d = delivery
export const deliverydispatch =(id,check,charges) =>{
   return   {type:'SERVICE',payload:{id:id,checked:check,amount:charges}}
  
}