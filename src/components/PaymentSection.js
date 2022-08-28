import React from 'react'
import {useContext} from 'react'
import InputContext from '../InputContext'

const PaymentSection = () => {
  const {count,oncount} = useContext(InputContext)
    const initial = 0
   const qty = count.reduce((prev,current)=> prev + current.total ,initial) 
    const serviceCharges = oncount.reduce((prev,current)=> prev + current.includecharges ,initial)

  return (
    <div className=''>
      <h1 className='font-semibold  my-3 text-xl font-poppins text-heading'>PAYMENT SUMMARY</h1>
      <div className='p-7 mt-3 rounded-md  bg-white'>
        <div className='bg-color3 text-color1 font-semibold font-poppins text-center rounded-md py-2'><h1>GUEST CHECKOUT</h1></div>
      
          <div className='flex justify-between mt-2 py-5 '>
             <div className='font-poppins text-color2 text-sm font-medium'>Transaction code</div>
             <div className='font-poppins  text-sm'>PK23264245</div>
          </div>
          <div className='flex  flex-wrap justify-between border-b-2 border-dashed border-color3 pb-5'>
             <div ><input type='text' placeholder='COUPON CODE' className='border-2 border-color3 rounded-md text-color2 font-poppins col-span-2 px-2  w-full max-w-[200px]'/></div>
             <div className='text-center font-semibold font-poppins text-primary bg-secondary rounded-md px-5 ' ><button>Apply</button></div>
          </div>

          <div className='flex justify-between py-4'>
           <div className='text-color2 font-poppins font-medium  text-sm'>Order Summary</div>
           <div className='font-poppins'>£{(qty).toFixed(2)}</div>
          </div>
          <div className='flex justify-between pb-4'> 
           <div className='text-color2 font-poppins  text-sm font-medium'>Additional Service</div>
           <div className='font-semibold font-poppins'>£{serviceCharges}</div>
          </div>
          <div className='flex justify-between pb-5 border-b-2 border-dashed border-color3 '>
           <div className='text-color2 font-poppins font-medium text-sm'>Total Amount</div>
           <div className='font-semibold font-poppins'>£{(Number(qty)+Number(serviceCharges)).toFixed(2)}</div>
          </div>
          <div className='bg-primary font-semibold font-poppins text-center text-white  rounded-md mt-7 py-2 cursor-pointer'>
          <button >FREE DELIVARY INCLUDED</button>
          </div>
      </div>
    </div>
  )
}
export default PaymentSection