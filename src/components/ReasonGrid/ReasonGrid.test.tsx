import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { ReasonCard } from '../../types/content';
import { ReasonGrid } from './ReasonGrid';

const reasons: ReasonCard[] = Array.from({ length: 8 }, (_, i) => ({
  icon: '🔎',
  title: `Reason ${i + 1}`,
  description: `Description ${i + 1}`,
}));

describe('ReasonGrid', () => {
  it('renders a heading', () => {
    render(<ReasonGrid reasons={reasons} />);
    expect(screen.getByRole('heading', { name: /common reasons/i })).toBeInTheDocument();
  });

  it('renders one article per reason', () => {
    render(<ReasonGrid reasons={reasons} />);
    expect(screen.getAllByRole('article')).toHaveLength(8);
  });

  it('renders each title and description', () => {
    render(<ReasonGrid reasons={reasons} />);
    for (const reason of reasons) {
      expect(screen.getByText(reason.title)).toBeInTheDocument();
      expect(screen.getByText(reason.description)).toBeInTheDocument();
    }
  });

  it('numbers cards sequentially starting at 1', () => {
    render(<ReasonGrid reasons={reasons} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();
  });

  it('handles an empty reasons array without crashing', () => {
    render(<ReasonGrid reasons={[]} />);
    expect(screen.queryAllByRole('article')).toHaveLength(0);
  });
});
