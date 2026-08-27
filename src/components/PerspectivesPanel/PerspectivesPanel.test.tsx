import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PerspectivesPanel } from './PerspectivesPanel';

describe('PerspectivesPanel', () => {
  it('renders nothing when perspectives is undefined', () => {
    const { container } = render(<PerspectivesPanel perspectives={undefined} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders nothing when perspectives is an empty object', () => {
    const { container } = render(<PerspectivesPanel perspectives={{}} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders only the populated perspective entries', () => {
    render(
      <PerspectivesPanel
        perspectives={{ teacher: 'Classroom framing here.', teen: 'Direct-to-teen framing.' }}
      />,
    );
    expect(screen.getByText(/for teachers/i)).toBeInTheDocument();
    expect(screen.getByText('Classroom framing here.')).toBeInTheDocument();
    expect(screen.getByText(/for teens/i)).toBeInTheDocument();
    expect(screen.queryByText(/for clinicians/i)).not.toBeInTheDocument();
  });
});
