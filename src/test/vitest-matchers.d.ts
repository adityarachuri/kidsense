// The `export {}` makes this file a module rather than a global script, which is required for
// `declare module 'vitest'` to augment the real module's types instead of replacing them.
export {};

interface JestAxeMatchers<R = unknown> {
  toHaveNoViolations(): R;
}

declare module 'vitest' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type -- declaration merging requires re-declaring the interface, even with no additional members
  interface Assertion<T = unknown> extends JestAxeMatchers<T> {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type -- declaration merging requires re-declaring the interface, even with no additional members
  interface AsymmetricMatchersContaining extends JestAxeMatchers {}
}
