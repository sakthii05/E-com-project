import React from 'react'
import {MdDone} from 'react-icons/md'
import{useContext}from 'react'
import InputContext from '../InputContext';

function DeliverySection() {

    const {deliverycount,deliverydispatch} = useContext(InputContext)
    const style = {fontSize:'18px',color:'#f96a2b'}

  return (
    <div>
      <h1 className='font-bold   text-xl font-poppins my-5 text-heading'>DELIVERY OPTIONS</h1>  
      <div className='flex flex-row flex-wrap justify-between gap-y-5 ' >
        
     {deliverycount.map((d)=>{
        return(
            <div key={d.id} className='flex items-center lg:w-full desktop:w-auto'>
            <div ><p className={d.checked ? 'w-6 h-6 border-2 border-primary rounded-full':'w-6 h-6 border-2  border-color2 rounded-full'} > {d.checked ? <MdDone style={style}/> : ''}</p></div>
            <div className={d.checked ? 'flex flex-wrap  items-center bg-white rounded-md p-6 ml-5 border-4 border-primary shadow-md shadow-primary lg:w-full lg:justify-between':'flex flex-wrap items-center bg-white rounded-md lg:w-full lg:justify-between  p-6 ml-5'}onClick={()=>deliverydispatch({type:'DELIVERY',payload:{id:d.id,checked:d.checked}})} >
                <div className='flex-none '>
                    <img className='h-20 w-28 my-2 ' src={d.image}/>
                </div>
                <div className='pl-2 w-40'>
                    <h1 className='font-poppins text-sm font-semibold'>{d.heading}</h1>
                    <p className='text-color2 font-poppins text-xs'>{d.description}</p>
                    <p className='text-color2 font-poppins text-xs'>{d.date}</p>
                </div>
                <div className='font-poppins font-semibold w-20'>{d.amount >=0 ? ((d.amount).toFixed(2)):d.amount}</div>
            </div>
        </div>
        )
     })}
      </div>
    </div>
  )
}

export default DeliverySection