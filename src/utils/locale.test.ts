import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { applyLocale, getInitialLocale, getStoredLocale, storeLocale } from './locale';

describe('locale storage and DOM application', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-locale');
    document.documentElement.lang = 'en';
  });

  afterEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-locale');
    document.documentElement.lang = 'en';
  });

  it('getStoredLocale returns null when nothing has been stored', () => {
    expect(getStoredLocale()).toBeNull();
  });

  it('getStoredLocale returns null for a value outside the known locale set', () => {
    localStorage.setItem('kidsense-locale', 'fr');
    expect(getStoredLocale()).toBeNull();
  });

  it('getStoredLocale returns null for an empty string', () => {
    localStorage.setItem('kidsense-locale', '');
    expect(getStoredLocale()).toBeNull();
  });

  it('storeLocale persists a valid locale, and getStoredLocale reads it back', () => {
    storeLocale('hi');
    expect(localStorage.getItem('kidsense-locale')).toBe('hi');
    expect(getStoredLocale()).toBe('hi');
  });

  it('applyLocale sets both documentElement.lang and data-locale', () => {
    applyLocale('te');
    expect(document.documentElement.lang).toBe('te');
    expect(document.documentElement.getAttribute('data-locale')).toBe('te');
  });

  it('getInitialLocale falls back to the default locale when nothing is stored', () => {
    expect(getInitialLocale()).toBe('en');
  });

  it('getInitialLocale returns a previously stored, valid locale', () => {
    storeLocale('hi');
    expect(getInitialLocale()).toBe('hi');
  });
});
