import { render, screen } from '@testing-library/react'
import { CardDetailCoin } from './CardDetailCoin'
import '@testing-library/jest-dom'
import { MOCK_TICKER } from '@/mocks/Ticker'

describe('CardDetailCoin', () => {
  it('should render fields from card detail', () => {
    render(<CardDetailCoin data={MOCK_TICKER} />)
    const name = screen.getByText('Bitcoin')
    const symbol = screen.getByText('BTC')
    expect(symbol).toBeInTheDocument()
    expect(name).toBeInTheDocument()
  })
})