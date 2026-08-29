import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { describe, expect, it } from 'vitest';
import { AbilityLensPanel } from './AbilityLensPanel';

describe('AbilityLensPanel', () => {
  it('renders nothing when abilityLens is undefined', () => {
    const { container } = render(<AbilityLensPanel abilityLens={undefined} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders nothing when abilityLens is an empty array', () => {
    const { container } = render(<AbilityLensPanel abilityLens={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders every provided context and note', () => {
    render(
      <AbilityLensPanel
        abilityLens={[
          { context: 'Sensory processing differences', note: 'May find this especially loud.' },
          { context: 'Motor-planning differences', note: 'May need extra time for each step.' },
        ]}
      />,
    );
    expect(screen.getByText('Sensory processing differences')).toBeInTheDocument();
    expect(screen.getByText(/especially loud/i)).toBeInTheDocument();
    expect(screen.getByText('Motor-planning differences')).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <AbilityLensPanel
        abilityLens={[{ context: 'Sensory processing differences', note: 'A note.' }]}
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
