import React from 'react';
import classNames from 'classnames';
import { useContext } from 'react';
import InputContext from '../InputContext'



const AdditionalSection = () =>{
    const{ondispatch,oncount} = useContext(InputContext)

 
return (
    <div>
       <h1 className='font-semibold  my-5 text-xl font-poppins text-heading'>ADDTIONAL SERVICES</h1>
       <div className='flex flex-col gap-3'>

         {oncount.map((service)=>{
         return(
            <div key={service.id}  className='flex items-center justify-between bg-white rounded-md p-7'>
            <div >
                <h1 className='font-poppins font-semibold '>{service.heading}</h1>
                <p className='text-color2 font-poppins text-sm'>{service.description}</p>
            </div>
            <div className='font-semibold font-poppins'>£{(service.charges).toFixed(2)}</div>
            <div onClick={()=>ondispatch({type:'SERVICE',payload:{id:service.id,checked:service.checked,amount:service.charges}})} className={classNames('flex w-11 h-5 bg-color3 rounded-full cursor-pointer',{'bg-secondary': service.checked})} >
                <span className={classNames('h-3 w-3 m-1  bg-white rounded-full transition-all duration-400',{'bg-primary ml-7': service.checked})}></span>    
            </div>
        </div>
      )})}   
       </div>
    </div>
  )
}
export default AdditionalSection 