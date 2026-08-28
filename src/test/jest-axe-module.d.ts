// jest-axe ships no type declarations. This file has no top-level import/export, so TS treats
// it as a global script — required for `declare module` to freshly declare an untyped package
// rather than (as in vitest-matchers.d.ts) augment an already-typed one.
declare module 'jest-axe' {
  export interface AxeViolationsResult {
    violations: unknown[];
  }

  export function axe(html: Element | string, options?: unknown): Promise<AxeViolationsResult>;

  export const toHaveNoViolations: {
    toHaveNoViolations: (results?: Partial<AxeViolationsResult>) => {
      pass: boolean;
      message(): string;
    };
  };
}
