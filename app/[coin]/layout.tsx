// Libraries
import React from 'react'
// Components
import { SummaryCoin } from '@/components'
// Models
import { IRequest } from '@/models/Ticker'

const LayoutCurrencyPage: React.FC<{ params: IRequest, children: React.ReactNode }> = ({ params, children }) => {
  return (
    <div className='flex flex-col justify-center gap-4'>
      <SummaryCoin params={params} />
      {children}
    </div>
  )
}

export default LayoutCurrencyPage
