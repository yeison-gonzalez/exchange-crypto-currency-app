// Libraries
'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// Models
import { ITicker } from '@/models/Ticker'
// Utils
import { handleIsPositive } from '@/utils/Validate'
// Hooks
import { useValidateRoutes } from '@/hooks'

/**
 * Interface props card crypto currency
 * @constructor
 * @param {ITicker} data - Data detail from coin
 */
interface ICardCryptoCurrencyProps {
  data: ITicker
}

export const CardCryptoCurrency: React.FC<ICardCryptoCurrencyProps> = ({ data }) => {
  const pathname = usePathname();
  const { getRouteMarkets } = useValidateRoutes();

  return (
    <div className='flex flex-row bg-zinc-700 border-zinc-700 border rounded-3xl shadow p-6 xs:p-3 xs:w-full w-max'>
      <div className='flex items-center mr-2 xs:mr-1'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 xs:w-6 xs:h-6 stroke-yellow-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div className='flex flex-row justify-center items-center w-24 xs:flex-1'>
        <div className='flex flex-col'>
          <label className='text-center text-white font-medium xs:text-xs leading-none mb-2'>
            {data.name}
          </label>
          <label className='text-center text-white font-normal text-xs xs:text-xs'>
            {data.symbol}
          </label>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-32 xs:w-16 sm:flex-1'>
        <label className='text-center text-white font-medium w-full xs:text-xs'>$ {data?.price_usd}</label>
        <label className={`text-center ${handleIsPositive(data?.percent_change_1h) ? 'text-red-500' : 'text-green-500'} font-normal xs:text-xs w-full`}>{data?.percent_change_1h}%</label>
      </div>
      <div className='flex flex-col justify-center items-center w-28 xs:w-12'>
        <Link href={`${getRouteMarkets(pathname, data?.symbol)}`}>
          <button className='bg-green-500 hover:bg-green-700 xs:hidden text-white text-xs font-bold py-2 px-4 rounded-full inline-flex items-center gap-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Markets
          </button>
        </Link>
        <Link href={`${getRouteMarkets(pathname, data?.symbol)}`}>
          <button className='bg-green-500 xs:block hover:bg-green-700 hidden text-white text-xs font-bold p-2 rounded-full items-center gap-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  )
}
