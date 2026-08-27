import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProgressBadge } from './ProgressBadge';

describe('ProgressBadge', () => {
  it('shows "Coming soon" when no topics are authored', () => {
    render(<ProgressBadge authored={0} planned={15} />);
    expect(screen.getByText('Coming soon')).toBeInTheDocument();
  });

  it('shows a fraction when partially authored', () => {
    render(<ProgressBadge authored={9} planned={10} />);
    expect(screen.getByText('9 of 10 topics')).toBeInTheDocument();
  });

  it('shows a plain count when fully authored', () => {
    render(<ProgressBadge authored={10} planned={10} />);
    expect(screen.getByText('10 topics')).toBeInTheDocument();
  });
});
