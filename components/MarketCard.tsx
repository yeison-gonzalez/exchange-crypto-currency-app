// Libraries
import React from 'react'
// Models
import { IMarket } from '@/models/Market'

/**
 * Interface props market card component
 * @constructor
 * @param {IMarket} market - Market data
 */
interface IMarketCardProps {
  market: IMarket
}

export const MarketCard: React.FC<IMarketCardProps> = ({ market }) => {
  return (
    <div className='flex flex-col border border-zinc-700 rounded-2xl bg-zinc-700 p-4 w-max min-w-max'>
      <div className='flex flex-row gap-x-2'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 fill-orange-400">
          <path fillRule="evenodd" d="M10.362 1.093a.75.75 0 00-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925zM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0018 14.25V6.443zm-8.75 12.25v-8.25l-7.25-4v7.807a.75.75 0 00.388.657l6.862 3.786z" clipRule="evenodd" />
        </svg>
        <label className='text-white font-bold text-lg'>{market.name}</label>
      </div>
      <div className='flex flex-row gap-x-3'>
          <div className='flex flex-row items-center'>
            <label className='text-white font-semibold text-sm'>{market.quote}</label>
            <span className='text-white text-sm mx-1'>/</span>
            <label className='text-white font-semibold text-sm'>{market.base}</label>
          </div>
          <div className='flex flex-col flex-1'>
              <label className='text-white font-normal text-sm'><span className='font-semibold'>Price:</span> $ {market.price_usd}</label>
              <label className='text-white font-normal text-sm'><span className='font-semibold'>Volume:</span> $ {market.volume_usd}</label>
          </div>
      </div>
    </div>
  )
}
