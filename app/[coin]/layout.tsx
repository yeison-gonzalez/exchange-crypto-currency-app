import React from 'react'
import { IRequest, SummaryCoin } from '@/components'

const LayoutCurrencyPage: React.FC<{ params: IRequest, children: React.ReactNode }> = ({ params, children }) => {
  return (
    <div className='flex flex-col justify-center gap-4'>
        <SummaryCoin params={params} />
        {children}
    </div>
  )
}

export default LayoutCurrencyPage
