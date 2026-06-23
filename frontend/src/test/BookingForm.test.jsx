import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import BookingForm from '../components/BookingForm'

describe('BookingForm Component', () => {
  test('renders correctly', () => {
    render(<BookingForm />)

    expect(
      screen.getByText(/Booking Form/i)
    ).toBeInTheDocument()
  })
})