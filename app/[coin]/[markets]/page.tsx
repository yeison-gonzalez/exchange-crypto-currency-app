import MarketList from '@/components/MarketList';
import React from 'react'

const MarketsPage: React.FC<{ params: { markets: string } }> = ({ params }) => {
    const { markets } = params;

    return (
        <div>
            <MarketList markets={markets} />
        </div>
    )
}

export default MarketsPage
