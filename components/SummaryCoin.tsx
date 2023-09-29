import React from 'react'
import { useGetIdsBySymbol } from '@/hooks'
import { CardDetailCoin } from '.'
import { fetchGetAllTickers, fetchGetTickerDetail } from '@/api/fetchApi'

export interface IRequest {
  coin: string
}

interface ISummaryCoinProps {
  params: IRequest
}

export const SummaryCoin: React.FC<ISummaryCoinProps> = async ({ params }) => {
  const { coin } = params
  const cryptos = await fetchGetAllTickers()
  const { handleGetIds } = useGetIdsBySymbol()
  const details = await fetchGetTickerDetail({ coin: handleGetIds(cryptos, coin) })

  return (
    <div className='flex flex-row w-max bg-black border-black border gap-3 rounded-3xl p-3'>
      {details?.map(detail => (
        <CardDetailCoin key={detail.id} data={detail} />
      ))}
    </div>
  )
}
