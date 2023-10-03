// Libraries
import { render, screen } from "@testing-library/react"
// Components
import { SummaryCoin } from ".."
// Mocks
import { MOCK_TICKER } from "@/mocks/Ticker"

describe('SummaryCoin', () => {
  it('should render summary coin component', () => {
    render(<SummaryCoin data={[MOCK_TICKER]} />)
    const component = screen.getByTestId('summary-coin')
    expect(component).toBeInTheDocument()
  })

  it('should render name coin from summary coin', () => {
    render(<SummaryCoin data={[MOCK_TICKER]} />)
    const nameCoin = screen.getByText('BTC')
    expect(nameCoin).toBeInTheDocument()
  })
})
