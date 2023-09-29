import React from 'react'
import { CardCryptoCurrency, SelectMultiSearch } from '.'

export interface ITicker {
  id: string
  symbol: string
  name: string
  nameid: string
  rank: number
  price_usd: string
  percent_change_24h: string
  percent_change_1h: string
  percent_change_7d: string
  price_btc: string
  market_cap_usd: string
  volume24: number
  volume24a: number
  csupply: string
  tsupply: string
  msupply: string
}

/**
 * Get all tickers
 * @returns Promise<ITicker[]>
 */
const fetchGetAllTickers = async (): Promise<ITicker[]> => {
  return fetch('https://api.coinlore.net/api/tickers/?limit=10')
    .then(res => res.json())
    .then(res => res.data)
}


export const ListExchanges: React.FC = async () => {
  const cryptos = await fetchGetAllTickers()
  const options = cryptos?.map(crypto => ({ value: crypto.id, label: crypto.symbol }))
  
  return (
    <div className='flex flex-col bg-black border-black border rounded-3xl p-6 w-min'>
      <div className='flex flex-row flex-wrap items-center justify-center mb-4 gap-y-3 gap-x-4'>
        <h2 className='text-white font-semibold text-xl'>Crypto currencies</h2>
        <SelectMultiSearch name="coin" options={options} />
      </div>
      <div className='flex flex-col gap-y-4'>
        {cryptos?.map(crypto => (
          <CardCryptoCurrency key={crypto.id} data={crypto} />
        ))}
      </div>
    </div>
  )
}
