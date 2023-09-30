import { render, screen } from '@testing-library/react'
import { CardCryptoCurrency } from './CardCryptoCurrency'
import '@testing-library/jest-dom'
import { MOCK_TICKER } from '@/mocks/Ticker'

describe('CardCryptoCurrency', () => {
  it('should render fields from card crypto currency', () => {
    render(<CardCryptoCurrency data={MOCK_TICKER} />)
    const symbol = screen.getByText('BTC')
    const price = screen.getByTestId('price-usd')
    expect(symbol).toBeInTheDocument()
    expect(price).toBeInTheDocument()
  })

  it('should render the button component', () => {
    render(<CardCryptoCurrency data={MOCK_TICKER} />)
    const button = screen.getByRole('button', {
      name: 'Markets'
    })
    expect(button).toBeInTheDocument()
  })
})