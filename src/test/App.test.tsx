import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest';
import App from '@/App'

describe('App.tsx', () => {
  it('should render hello world', () => {
    // Arrange
    render(<App />);
    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()
  });
});