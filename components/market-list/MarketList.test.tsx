// Libraries
import { render, screen, fireEvent } from "@testing-library/react"
// Components
import { MarketList } from ".."
// Mocks
import { MOCK_MARKET } from "@/mocks/Market"

describe('MarketList', () => {
  it('should title coin from market list', () => {
    render(<MarketList data={[MOCK_MARKET]} markets="Test" />)
    const component = screen.getByText('Markets (Test)')
    expect(component).toBeInTheDocument()
  })

	it('should render close button from market list', () => {
    render(<MarketList data={[MOCK_MARKET]} markets="Test" />)
    const component = screen.getByTestId('close-button')
    expect(component).toBeInTheDocument()
		fireEvent.click(component);
  })
})
