import { getIllustration } from '../../assets/illustrations/registry';

interface IllustrationProps {
  readonly illustrationId: string;
  readonly className?: string;
}

/**
 * Renders the illustration registered for a given id. Falls back to a
 * neutral placeholder glyph if the id is unrecognized, so a content typo
 * degrades gracefully instead of crashing the page.
 */
export function Illustration({ illustrationId, className }: IllustrationProps) {
  const Component = getIllustration(illustrationId);

  if (!Component) {
    return (
      <svg
        className={className}
        viewBox="0 0 400 230"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="200" cy="115" r="40" fill="#EAF3FC" />
        <text x="200" y="123" textAnchor="middle" fontSize="28" fill="#8266C9">
          ?
        </text>
      </svg>
    );
  }

  return <Component className={className} />;
}
