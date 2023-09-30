import { render, screen } from '@testing-library/react'
import { MarketCard } from './MarketCard'
import '@testing-library/jest-dom'
import { MOCK_MARKET } from '@/mocks/Market'

describe('MarketCard', () => {
  it('should render market card', () => {
    render(<MarketCard market={MOCK_MARKET} />)
    const name = screen.getByText('BitForex')
    expect(name).toBeInTheDocument()
  })
})