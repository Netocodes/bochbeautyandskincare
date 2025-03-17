import React, { useState, useEffect } from 'react';
import {handlecopy} from "./productshowcase"
import { RxClipboardCopy } from "react-icons/rx";

import {
                Menu,
                MenuHandler,
                MenuList,
                MenuItem,
                Button,
                
              } from "@material-tailwind/react";
              import {useCart} from '../context/usecart'
              import { ImExit } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
const Currency = () => {
  const {TotalPrice} = useCart()
  const navigate = useNavigate()
  // State for input values and selected currencies
  const [amount, setAmount] = useState<string>(TotalPrice().toString());
  const [fromCurrency, setFromCurrency] = useState<string>('TRY');
  const [toCurrency, setToCurrency] = useState<string>('NGN');
  const [convertedAmount, setConvertedAmount] = useState<string>('');
  const [lastUpdated, setLastUpdated] = useState<string>('');


  // Fetch conversion rate and update converted amount
  const convertCurrency = async () => {
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const data = await response.json();
      const rate = data.rates[toCurrency];
      const result = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: toCurrency, // e.g., 'EUR'
      }).format(parseFloat(amount) * rate);
      setConvertedAmount(result);
      setLastUpdated(new Date().toLocaleString());
    } catch (error) {
      console.error('Error fetching conversion rate:', error);
    }
  };

  // Trigger conversion when amount or currencies change
  useEffect(() => {
    if (amount && fromCurrency && toCurrency) {
      convertCurrency();
    }
  }, [amount, fromCurrency, toCurrency]);

  // Handle currency selection
  const handleCurrencyChange = (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => {
    setter(value);
  };

  return (
    <div>
      <ImExit onClick={() => navigate(-1)} className="my-2 size-12 text-[#8c2643] " /> 
      <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-[85rem] py-12 px-5 bg-[#f8f8f8] mx-auto">
        <div className="block mb-4 mx-auto border-b border-slate-300 pb-2">
          <a
            target="_blank"
            href="https://www.material-tailwind.com/docs/html/input-number"
            className="flex flex-col gap-y-3 w-full px-4 py-2 text-center text-slate-700 transition-all"
          >
            Need a website that doesn't stress your customers like this inbuilt currency converter feauture <a href="https://wa.me/+2349134730499?text=Hey%20NetoCodes%2C%20are%20you%20active%20for%20work%3F" 
            className='underline underline-offset-8 decoration-[#8c2643]'
            target="_blank" rel="noopener noreferrer">
  " Chat with NetoCodes "
</a>.
          </a>
        </div>

        <div className="w-full md:max-w-[65rem] bg-gray-100 shadow-lg mx-auto px-6 py-6 mt-4">
          <p className="text-slate-500 mb-4">
            Enter the amount you wish to convert and select the desired currency.
          </p>
          <div className="flex flex-col items-center justify-between">
            {/* From Currency Input */}
            <div className="w-full max-w-xs min-w-[200px] mt-4">
              <label className=" mb-1 flex items-center justify-between text-sm text-slate-800">From <span className='text-xs'>our currency "turkish lira"</span></label>
              <div className="relative mt-2">
                <input
                  type="text"
                  
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full h-12 pl-3 bg-transparent placeholder:text-gray-600 text-slate-700 text-lg border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                  placeholder={TotalPrice().toString()}
                />
                <div className="absolute top-2 right-0 flex items-center pr-3">
                  <div className="h-6 border-l border-slate-200 mr-2"></div>
                  <button className="dropdownButton h-full text-sm flex justify-center items-center bg-transparent text-slate-700 focus:outline-none">
                    <span className="dropdownSpan"> 
                    {['TRY'].map((currency) => (
                        <ul>
                 <li
                          key={currency}
                          className="px-4 py-2 text-center text-slate-800 hover:bg-slate-100 text-sm cursor-pointer"
                          onClick={() => handleCurrencyChange(setFromCurrency, currency)}
                        >
                          {currency}
                        </li>
                        </ul>
                      ))}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4 ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                
                </div>
              </div>
            </div>

            {/* Swap Button */}
            <div  onClick={() => handlecopy(convertedAmount)} className="flex items-center justify-center mt-6">
              {/* <button
                className="p-2 rounded-full border border-slate-300 bg-white hover:bg-slate-100 shadow-sm"
                onClick={() => {
                  const temp = fromCurrency;
                  setFromCurrency(toCurrency);
                  setToCurrency(temp);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-slate-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                  />
                </svg>
              </button> */}
              <RxClipboardCopy className='text-[#000] size-7 ' />copy
            </div>

            {/* To Currency Input */}
            <div className="w-full max-w-xs min-w-[200px] -mt-2">
              <label className="block mb-1 text-sm text-slate-800">To</label>
              <div className="relative mt-2 flex flex-col gap-y-8 w-full ">
                <input
                                                                                                                                  type="text"                                                                                                               value={convertedAmount}
                readOnly                                                                                         className="pr-24 text-lg"
  placeholder="1,000" />
            
       

            <Menu>
      <MenuHandler>
        <Button className='bg-[#8c2643] text-white font-semibold capitalize shadow-lg'  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>select currency</Button>
      </MenuHandler>
      <MenuList   placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      {['NGN', 'EUR', 'TRY', 'USD', ].map((currency) => (
                      
        <MenuItem  key={currency} onClick={() => handleCurrencyChange(setToCurrency, currency)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{currency}</MenuItem>

                      ))}
       
      </MenuList>
    </Menu>
 
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="mt-8 text-slate-500 text-sm">
            <p>Rates are updated every hour to provide the most accurate conversions.</p>
            <p className="mt-1">
              <b>Last updated</b>: {lastUpdated}
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Currency;