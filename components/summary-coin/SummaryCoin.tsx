// Libraries
import React from 'react'
// Components
import { CardDetailCoin } from '..'
// Models
import { ITicker } from '@/models/Ticker'

/**
 * Interface summary coin component
 * @constructor
 * @param {ITicker} data - Data detail coin
 */
interface ISummaryCoinProps {
  data: ITicker[]
}

export const SummaryCoin: React.FC<ISummaryCoinProps> = ({ data }) => {
  return data?.length > 0 ? (
    <div data-testid="summary-coin" className='flex flex-row flex-wrap w-max max-w-sm xs:w-auto xs:max-w-min bg-black border-black border gap-3 justify-center rounded-3xl p-5 self-center'>
      {data?.map(detail => (
        <CardDetailCoin key={detail.id} data={detail} />
      ))}
    </div>
  ) : null;
}
