// Libraries
import React from 'react'
// Components
import { CardCryptoCurrency, IOption, SelectMultiSearch } from '..'
// Api
/* import { fetchGetAllTickers } from '@/utils/FetchApi' */
import { ITicker } from '@/models/Ticker'

interface IListExchangeProps {
  data: ITicker[]
  options: IOption[]
}

export const ListExchanges: React.FC<IListExchangeProps> = ({ data, options }) => {
  return (
    <div className='flex flex-col bg-black border-black border rounded-3xl p-6 w-min xs:w-full'>
      <div className='flex flex-row flex-wrap items-center justify-center mb-4 gap-y-3 gap-x-4'>
        <h2 className='text-white font-semibold text-xl'>Crypto currencies</h2>
        <SelectMultiSearch name="coin" options={options} />
      </div>
      <div className='flex flex-col gap-y-4'>
        {data.length ? data?.map(crypto => (
          <CardCryptoCurrency key={crypto.id} data={crypto} />
        )) : (
            <span className='text-base text-white font-semibold'>No cryptos</span>
        )}
      </div>
    </div>
  )
}
