export type TranslateParams = Record<string, string | number>;

/** Replaces `{name}` placeholders in `template` with values from `params`. Unknown placeholders are left as-is. */
export function interpolate(template: string, params?: TranslateParams): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in params ? String(params[key]) : match,
  );
}
