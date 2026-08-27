import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Illustration } from './Illustration';

describe('Illustration', () => {
  it('renders the registered illustration for a known id', () => {
    const { container } = render(<Illustration illustrationId="wake-up" />);
    const svg = container.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders a fallback glyph for an unknown id instead of throwing', () => {
    const { container } = render(<Illustration illustrationId="does-not-exist" />);
    const svg = container.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(container.textContent).toContain('?');
  });

  it('forwards the className to the rendered svg', () => {
    const { container } = render(
      <Illustration illustrationId="wake-up" className="hero-illustration" />,
    );
    expect(container.querySelector('svg.hero-illustration')).not.toBeNull();
  });

  it('forwards the className to the fallback svg as well', () => {
    const { container } = render(
      <Illustration illustrationId="unknown-id" className="hero-illustration" />,
    );
    expect(container.querySelector('svg.hero-illustration')).not.toBeNull();
  });
});
