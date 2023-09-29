// Libraries
import React from 'react'
// Components
import { CardCryptoCurrency, SelectMultiSearch } from '.'
// Api
import { fetchGetAllTickers } from '@/api/fetchApi'

export const ListExchanges: React.FC = async () => {
  const cryptos = await fetchGetAllTickers()
  const selectOptions = cryptos?.map(crypto => ({ value: crypto.id, label: crypto.symbol }))
  
  return (
    <div className='flex flex-col bg-black border-black border rounded-3xl p-6 w-min'>
      <div className='flex flex-row flex-wrap items-center justify-center mb-4 gap-y-3 gap-x-4'>
        <h2 className='text-white font-semibold text-xl'>Crypto currencies</h2>
        <SelectMultiSearch name="coin" options={selectOptions} />
      </div>
      <div className='flex flex-col gap-y-4'>
        {cryptos?.map(crypto => (
          <CardCryptoCurrency key={crypto.id} data={crypto} />
        ))}
      </div>
    </div>
  )
}
