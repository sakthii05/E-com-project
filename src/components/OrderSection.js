import React from 'react'
import {useContext} from 'react'
import InputContext from '../InputContext'

function OrderSection () {
        const {dispatch,count} = useContext(InputContext)

      
        
    // useEffect(()=>{
    //       const test=(DiscountAmount1+DiscountAmount2+DiscountAmount3)
    //       props.onTotalchange(test.toFixed(2))
    //     })

return (
    <div>
      
      <h1 className='font-semibold   text-xl font-poppins my-3 text-heading'>YOUR ORDER</h1>
      <div className='p-5 rounded-md  bg-white '>
    
    {/* order */}

   {count.map((product)=>{return(
    <div key={product.id} className= {product.percent ===1 ?'flex flex-wrap py-4 justify-between items-center gap-10':'flex flex-wrap py-4 justify-between items-center gap-10 border-b border-color3'}>

    <div className='flex items-center w-2/5 font-poppins'>
       <div className='flex-none bg-color3'><img className="h-24 w-24" src={product.image}/></div>
       <div className='flex flex-wrap flex-col ml-2 text-sm'>
      <p className='text-color1 font-semibold'>{product.productName}</p>
      <p className=''>colour : <label className='text-color1 font-semibold'>{product.colour}</label></p>
      <p className=''>Size : <label className='text-color1 font-semibold'>{product.size}</label></p>
      </div>
    </div>

  <div className='flex items-center gap-1 font-semibold font-poppins'>
   {product.percent!==1 ? <p className='text-primary'>£{(product.percent*product.amount).toFixed(2)}</p> :<p></p> } 
   {product.percent ===1 ? <p className='pl-12 font-poppins font-semibold'>£{(product.amount).toFixed(2)}</p> : <p className='text-color2 line-through pl-2'>£{(product.amount).toFixed(2)}</p> } 
 </div>

  <div className='flex  items-center gap-5 font-poppins pr-10'>
   <p className='text-color2 text-xs '>Quantity : </p>
   <input type="number" min="1" value={product.quantity} onChange={(e)=>dispatch({type:'QUANTITY',payload:{id:product.id,qty:e.target.value,
   total:(product.percent*product.amount)*e.target.value}})}

    className='border-2 rounded-md pl-1 w-12 h-6 border-color3'/>
   <div className='bg-white drop-shadow-md  flex justify-center items-center h-6 w-6 rounded-full '>{product.size}</div>
  </div>
</div>
   )})} 
</div>
</div>
  
  )
 
}
export default OrderSection
