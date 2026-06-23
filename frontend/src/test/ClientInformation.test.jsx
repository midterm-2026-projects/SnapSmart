import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import ClientInformation from '../components/ClientInformation'

describe('ClientInformation Component', () => {
  test('displays input fields correctly', () => {
    render(<ClientInformation />)

    expect(screen.getByPlaceholderText(/Full Name/i))
      .toBeInTheDocument()

    expect(screen.getByPlaceholderText(/Email/i))
      .toBeInTheDocument()

    expect(screen.getByPlaceholderText(/Contact Number/i))
      .toBeInTheDocument()
  })
})