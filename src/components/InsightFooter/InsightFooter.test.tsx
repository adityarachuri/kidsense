import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { InsightFooter } from './InsightFooter';

describe('InsightFooter', () => {
  it('renders the insight text', () => {
    render(<InsightFooter insight="A broader pattern is often at play." />);
    expect(screen.getByText('A broader pattern is often at play.')).toBeInTheDocument();
  });
});
