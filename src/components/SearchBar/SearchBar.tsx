import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalizedSections } from '../../content/localize';
import { sections } from '../../content/sections';
import { useLocale } from '../../hooks/useLocale';
import { searchTopics } from '../../utils/search';
import styles from './SearchBar.module.css';

export function SearchBar() {
  const { t } = useLocale();
  const localizedSections = useLocalizedSections(sections);
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const listboxId = useId();

  const results = useMemo(
    () => searchTopics(localizedSections, query).slice(0, 8),
    [localizedSections, query],
  );

  useEffect(() => {
    setActiveIndex(-1);
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function goToResult(index: number) {
    const result = results[index];
    if (!result) return;
    navigate(`/section/${result.section.id}/${result.topic.id}`);
    setQuery('');
    setIsOpen(false);
    inputRef.current?.blur();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!isOpen || results.length === 0) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((prev) => (prev + 1) % results.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((prev) => (prev <= 0 ? results.length - 1 : prev - 1));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      goToResult(activeIndex === -1 ? 0 : activeIndex);
    } else if (event.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  }

  const showResults = isOpen && query.trim().length > 0;

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div className={styles.inputWrapper}>
        <span className={styles.icon} aria-hidden="true">
          🔍
        </span>
        <input
          ref={inputRef}
          type="text"
          role="combobox"
          aria-expanded={showResults}
          aria-controls={listboxId}
          aria-autocomplete="list"
          aria-label={t((d) => d.header.searchLabel)}
          className={styles.input}
          placeholder={t((d) => d.header.searchPlaceholder)}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
        />
        {query.length > 0 && (
          <button
            type="button"
            className={styles.clearButton}
            aria-label={t((d) => d.header.clearSearch)}
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
          >
            ✕
          </button>
        )}
      </div>

      <div className="visually-hidden" aria-live="polite">
        {showResults &&
          (results.length === 0
            ? t((d) => d.header.noResultsAnnouncement)
            : t((d) => d.header.resultsAnnouncement, { count: results.length }))}
      </div>

      {showResults && (
        <ul className={styles.results} id={listboxId} role="listbox">
          {results.length === 0 ? (
            <li className={styles.noResults} role="presentation">
              {t((d) => d.header.noResultsFor)} &ldquo;{query}&rdquo;
            </li>
          ) : (
            results.map((result, index) => (
              <li key={result.topic.id} className={styles.resultItem} role="presentation">
                <a
                  href={`/section/${result.section.id}/${result.topic.id}`}
                  role="option"
                  aria-selected={index === activeIndex}
                  className={
                    index === activeIndex
                      ? `${styles.resultLink} ${styles.resultLinkActive}`
                      : styles.resultLink
                  }
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={(event) => {
                    event.preventDefault();
                    goToResult(index);
                  }}
                >
                  <span className={styles.resultTitle}>{result.topic.title}</span>
                  <span className={styles.resultSection}>{result.section.shortTitle}</span>
                </a>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
