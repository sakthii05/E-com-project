import './App.css';
import Header from './components/Header';
import OrderSection from './components/OrderSection';
import PaymentSection from './components/PaymentSection';
import DeliverySection from './components/DeliverySection';
import AdditionalSection from './components/AdditionalSection';
import { InputProvider } from './InputContext';



function App() {
   
  return (
    
    <div className='bg-slate-100 min-h-screen '>
      
      <Header />
      <div className='grid  tablet:grid-cols-[2fr,1fr] gap-x-14 gap-y-14 sm:grid-flow-row  m-14'>
        <InputProvider>
            <OrderSection />
            <PaymentSection />
            <DeliverySection />
            <AdditionalSection />
       </InputProvider>
       
       </div>
      </div>
    
  );
}

export default App;
