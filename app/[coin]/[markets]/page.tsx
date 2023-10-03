// Libraries
import React from 'react'
// Components
import { MarketList } from '@/components';
// Api
import { fetchGetAllTickers, fetchGetMarketByCoin } from '@/utils/FetchServerApi';
// Hooks
import { useTransformSymbol } from '@/hooks';

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

const MarketsPage: React.FC<IMarketsPageProps> = async ({ params }) => {
  const { markets } = params;
  const { handleGetIds } = useTransformSymbol()

  const cryptos = await fetchGetAllTickers()
  const optionsMarkets = await fetchGetMarketByCoin({ id: handleGetIds(cryptos, markets) })

  return (
    <div>
      <MarketList data={optionsMarkets} markets={markets} />
    </div>
  )
}

export default MarketsPage
