import { render, screen } from '@testing-library/react'
import App from './App'

test('renders React text', () => {
  render(<App />)
  const linkElement = screen.getByText(/React/i)
  expect(linkElement).toBeInTheDocument()
})
