import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { RoutineStep } from '../../types/content';
import { ConcernsWorksSplit } from './ConcernsWorksSplit';

const concerns = ['Concern one', 'Concern two'];
const strategies = ['Strategy one', 'Strategy two'];
const routine: RoutineStep[] = [
  { icon: '⏰', label: 'Step one' },
  { icon: '✅', label: 'Step two' },
  { icon: '🎉', label: 'Step three' },
];

describe('ConcernsWorksSplit', () => {
  it('renders both column headings', () => {
    render(
      <ConcernsWorksSplit
        concerns={concerns}
        professionalGuidance="Ask a professional."
        strategies={strategies}
        routine={routine}
      />,
    );
    expect(
      screen.getByRole('heading', { name: /when should parents be concerned/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /what usually works better/i })).toBeInTheDocument();
  });

  it('renders every concern', () => {
    render(
      <ConcernsWorksSplit
        concerns={concerns}
        professionalGuidance="Ask a professional."
        strategies={strategies}
        routine={routine}
      />,
    );
    for (const concern of concerns) {
      expect(screen.getByText(concern)).toBeInTheDocument();
    }
  });

  it('renders every strategy', () => {
    render(
      <ConcernsWorksSplit
        concerns={concerns}
        professionalGuidance="Ask a professional."
        strategies={strategies}
        routine={routine}
      />,
    );
    for (const strategy of strategies) {
      expect(screen.getByText(strategy)).toBeInTheDocument();
    }
  });

  it('renders the professional guidance text', () => {
    render(
      <ConcernsWorksSplit
        concerns={concerns}
        professionalGuidance="Ask a professional."
        strategies={strategies}
        routine={routine}
      />,
    );
    expect(screen.getByText('Ask a professional.')).toBeInTheDocument();
  });

  it('renders one arrow fewer than the number of routine steps', () => {
    const { container } = render(
      <ConcernsWorksSplit
        concerns={concerns}
        professionalGuidance="Ask a professional."
        strategies={strategies}
        routine={routine}
      />,
    );
    const arrows = container.querySelectorAll('[aria-hidden="true"]');
    const arrowTexts = Array.from(arrows).filter((el) => el.textContent === '→');
    expect(arrowTexts).toHaveLength(routine.length - 1);
  });

  it('renders every routine step label', () => {
    render(
      <ConcernsWorksSplit
        concerns={concerns}
        professionalGuidance="Ask a professional."
        strategies={strategies}
        routine={routine}
      />,
    );
    for (const step of routine) {
      expect(screen.getByText(step.label)).toBeInTheDocument();
    }
  });
});
