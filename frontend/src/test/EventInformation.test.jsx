import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import EventInformation from '../components/EventInformation'

describe('EventInformation Component', () => {
  test('displays input fields correctly', () => {
    render(<EventInformation />)

    expect(screen.getByPlaceholderText(/Event Type/i))
      .toBeInTheDocument()

    expect(screen.getByPlaceholderText(/Venue/i))
      .toBeInTheDocument()
  })
})