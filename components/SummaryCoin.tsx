// Libraries
import React from 'react'
// Hooks
import { useTransformSymbol } from '@/hooks'
// Components
import { CardDetailCoin } from '.'
// Api
import { fetchGetAllTickers, fetchGetTickerDetail } from '@/api/fetchApi'
// Models
import { IRequest } from '@/models/Ticker'

/**
 * Interface summary coin component
 * @constructor
 * @param {IRequest} params - params component
 */
interface ISummaryCoinProps {
  params: IRequest
}

export const SummaryCoin: React.FC<ISummaryCoinProps> = async ({ params }) => {
  const { handleGetIds } = useTransformSymbol()
  const { coin } = params

  const cryptos = await fetchGetAllTickers()
  const details = await fetchGetTickerDetail({ coin: handleGetIds(cryptos, coin) })

  return details?.length ? (
    <div className='flex flex-row w-max bg-black border-black border gap-3 rounded-3xl p-3'>
      {details?.map(detail => (
        <CardDetailCoin key={detail.id} data={detail} />
      ))}
    </div>
  ) : null;
}
