import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ReassuranceBanner } from './ReassuranceBanner';

describe('ReassuranceBanner', () => {
  it('renders the reassurance text', () => {
    render(<ReassuranceBanner reassurance="It's common!" explanation="Here's why." />);
    expect(screen.getByText("It's common!")).toBeInTheDocument();
  });

  it('renders the explanation text', () => {
    render(<ReassuranceBanner reassurance="It's common!" explanation="Here's why." />);
    expect(screen.getByText("Here's why.")).toBeInTheDocument();
  });
});
