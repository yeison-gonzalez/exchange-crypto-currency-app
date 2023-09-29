import React from 'react'
import { CardDetailCoin, ITicker } from '.'

export interface IRequest {
  coin: string
}

interface ISummaryCoinProps {
  params: IRequest
}

const fetchGetTickerDetail = async ({ coin }: IRequest): Promise<ITicker[]> => {
  return fetch(`https://api.coinlore.net/api/ticker/?id=${coin}`)
    .then(res => res.json())
}


export const SummaryCoin: React.FC<ISummaryCoinProps> = async ({ params }) => {
  const { coin } = params
  const details = await fetchGetTickerDetail({ coin })

  return (
    <div className='flex flex-row w-max bg-black border-black border gap-3 rounded-3xl p-3'>
      {details?.map(detail => (
        <CardDetailCoin key={detail.id} data={detail} />
      ))}
    </div>
  )
}
