import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CulturalLensPanel } from './CulturalLensPanel';

describe('CulturalLensPanel', () => {
  it('renders nothing when culturalLens is undefined', () => {
    const { container } = render(<CulturalLensPanel culturalLens={undefined} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders nothing when culturalLens is an empty array', () => {
    const { container } = render(<CulturalLensPanel culturalLens={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders every provided region and note', () => {
    render(
      <CulturalLensPanel
        culturalLens={[
          { region: 'Collectivist cultures', note: 'Often frame sharing as a family obligation.' },
          { region: 'Individualist cultures', note: 'Often frame it as a skill to build.' },
        ]}
      />,
    );
    expect(screen.getByText('Collectivist cultures')).toBeInTheDocument();
    expect(screen.getByText(/family obligation/i)).toBeInTheDocument();
    expect(screen.getByText('Individualist cultures')).toBeInTheDocument();
  });
});
