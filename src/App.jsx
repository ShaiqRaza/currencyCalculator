import { useEffect, useState } from 'react'
import {useCurrencyInfo} from './hooks/useCurrencyInfo'
import { InputBox } from './components'
import './App.css'

function App() {
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")
  const [amount, setAmount] = useState(1)

  const currencyData = useCurrencyInfo(from)
  const currencyKeys = Object.keys(currencyData)

  let convertedAmount = currencyData[to] * amount;

  function swap() {
    setFrom(to);
    setTo(from);
  }

  return (
    <>
      <div className='w-screen h-screen bg-zinc-600'>
        <div className='w-full h-3/4 flex flex-col justify-center items-center'>
          <div className='md:w-[450px] sm:w-[400px] w-4/5 flex flex-col gap-3 justify-center items-center'>
            <InputBox label="From" currencyKeys={currencyKeys} amount={amount} changeSelectedCurrency={setFrom} selectedCurrency={from} changeAmount={setAmount} />
            <InputBox label="To" currencyKeys={currencyKeys} amount={convertedAmount} changeSelectedCurrency={setTo} selectedCurrency={to} changeAmount={setAmount} setAmountDisability={true}/>
            <button className='absolute bg-blue-700 text-white font-semibold px-2 py-1 rounded-md sm:text-base text-sm hover:scale-105 hover:bg-blue-800' type="button" onClick={swap}>SWAP</button>
          </div>
          <div className='bg-blue-700 md:w-[450px] sm:w-[400px] w-4/5 text-center h-[35px] rounded-md text-white mt-4 flex justify-center items-center' >Converting  {from} to  {to}</div>
        </div>
      </div>
    </>
  )
}

export default App