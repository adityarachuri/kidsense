import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { getAllTopicsFlat } from '../../content/sections';
import { illustrationRegistry } from './registry';

describe('illustrationRegistry', () => {
  const ids = Object.keys(illustrationRegistry);

  it('is not empty', () => {
    expect(ids.length).toBeGreaterThan(0);
  });

  it.each(ids)('renders "%s" as a valid, non-empty svg', (id) => {
    const Component = illustrationRegistry[id]!;
    const { container } = render(<Component />);
    const svg = container.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(svg?.getAttribute('viewBox')).toBe('0 0 400 230');
    // A real illustration has more than just the outer <svg> wrapper.
    expect(svg?.children.length).toBeGreaterThan(0);
  });

  it('provides an illustration for every topic referenced in the content data', () => {
    const missing = getAllTopicsFlat()
      .map(({ topic }) => topic.illustrationId)
      .filter((illustrationId) => !(illustrationId in illustrationRegistry));
    expect(missing).toEqual([]);
  });

  it('forwards a className onto the rendered svg', () => {
    const Component = illustrationRegistry[ids[0]!]!;
    const { container } = render(<Component className="test-class" />);
    expect(container.querySelector('svg.test-class')).not.toBeNull();
  });
});
