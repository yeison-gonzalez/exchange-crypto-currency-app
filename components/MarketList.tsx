import React from 'react'
import MarketCard from './MarketCard'

interface IRequestMarket { 
    id: string
}

interface IMarketListProps {
    id: string
}

export interface IMarket {
    name: string
    base: string
    quote: string
    price: number
    price_usd: number
    volume: number
    volume_usd: number
    time: number
}

const fetchGetMarketByCoin = async ({ id }: IRequestMarket): Promise<IMarket[]> => {
    return fetch(`https://api.coinlore.net/api/coin/markets/?id=${id}`)
        .then(res => res.json())
        .then(res => res.slice(0,5))
}

const MarketList: React.FC<IMarketListProps> = async ({ id }) => {
    const markets = await fetchGetMarketByCoin({ id })

    return (
        <div className='flex flex-col gap-y-6'>
            <div className='flex justify-center rounded-2xl bg-black p-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7 fill-orange-400 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
                <h3 className='text-white font-bold text-xl'>Markets</h3>
            </div>
            <div className='flex flex-col gap-y-4 rounded-2xl bg-black p-5'>
                {markets?.map((market, index) => (
                    <MarketCard key={index} market={market} />
                ))}
            </div>
        </div>
    )
}

export default MarketList
