// Libraries
import React from 'react'
// Components
import { MarketList } from '@/components';

/**
 * Interface props markets page
 * @constructor
 * @param { markets: string } params - Params page
 */
interface IMarketsPageProps {
  params: {
    markets: string
  }
} 

const MarketsPage: React.FC<IMarketsPageProps> = ({ params }) => {
  const { markets } = params;

  return (
    <div>
      <MarketList markets={markets} />
    </div>
  )
}

export default MarketsPage
