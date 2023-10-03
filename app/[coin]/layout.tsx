// Libraries
import React from 'react'
// Components
import { SummaryCoin } from '@/components'
// Models
import { IRequest } from '@/models/Ticker'
// Hooks
import { useTransformSymbol } from '@/hooks'
// Api
import { fetchGetAllTickers, fetchGetTickerDetail } from '@/utils/FetchApi'

const LayoutCurrencyPage: React.FC<{ params: IRequest, children: React.ReactNode }> = async ({ params, children }) => {
  const { coin } = params
  const { handleGetIds } = useTransformSymbol()

  const cryptos = await fetchGetAllTickers()
  const details = await fetchGetTickerDetail({ coin: handleGetIds(cryptos, coin) })

  return (
    <div className='flex flex-col justify-center gap-4'>
      <SummaryCoin data={details}  />
      {children}
    </div>
  )
}

export default LayoutCurrencyPage
