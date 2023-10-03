// Libraries
import { render, screen } from "@testing-library/react"
// Components
import { ListExchanges } from ".."
import { RouterContextProviderMock } from "../"

describe('ListExchanges', () => {
  it('should render title from list exchanges', () => {
    const push = jest.fn();
    render(
      <RouterContextProviderMock router={{ push }}>
        <ListExchanges data={[]} options={[]} />
      </RouterContextProviderMock>
    )
    const titleList = screen.getByText('Crypto currencies')
    expect(titleList).toBeInTheDocument()
  })

  it('should render list exchanges witout data', () => {
    const push = jest.fn();
    render(
      <RouterContextProviderMock router={{ push }}>
        <ListExchanges data={[]} options={[]} />
      </RouterContextProviderMock>
    )
    const message = screen.getByText('No cryptos')
    expect(message).toBeInTheDocument()
  })
})
