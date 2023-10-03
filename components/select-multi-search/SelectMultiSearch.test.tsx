// Libraries
import { render, screen } from "@testing-library/react"
// Components
import { SelectMultiSearch } from ".."
import { RouterContextProviderMock } from "../"

describe('SelectMultiSearch', () => {
  it('should render select input search multi', () => {
    const push = jest.fn();
    render(
      <RouterContextProviderMock router={{ push }}>
        <SelectMultiSearch name="test" options={[]} />
      </RouterContextProviderMock>
    )
    const select = screen.getByText('Search crypto...')
    expect(select).toBeInTheDocument()
  })
})
