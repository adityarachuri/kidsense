import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { SearchBar } from './SearchBar';

function renderWithRouter() {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/section/:sectionId/:topicId" element={<div>Topic page reached</div>} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('SearchBar', () => {
  it('shows no results list before typing anything', () => {
    renderWithRouter();
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('shows matching results while typing', async () => {
    const user = userEvent.setup();
    renderWithRouter();
    await user.type(screen.getByRole('combobox'), 'bath');
    expect(await screen.findByText(/Why Kids Hate Taking a Bath/i)).toBeInTheDocument();
  });

  it('shows a "no results" message for a query that matches nothing', async () => {
    const user = userEvent.setup();
    renderWithRouter();
    await user.type(screen.getByRole('combobox'), 'zzznonexistentzzz');
    expect(await screen.findByText(/no topics found/i)).toBeInTheDocument();
  });

  it('navigates to the topic page when a result is clicked', async () => {
    const user = userEvent.setup();
    renderWithRouter();
    await user.type(screen.getByRole('combobox'), 'bath');
    const option = await screen.findByRole('option', { name: /Why Kids Hate Taking a Bath/i });
    await user.click(option);
    expect(await screen.findByText('Topic page reached')).toBeInTheDocument();
  });

  it('navigates to the first result on Enter', async () => {
    const user = userEvent.setup();
    renderWithRouter();
    const input = screen.getByRole('combobox');
    await user.type(input, 'bath');
    await waitFor(() => expect(screen.getByRole('listbox')).toBeInTheDocument());
    await user.keyboard('{Enter}');
    expect(await screen.findByText('Topic page reached')).toBeInTheDocument();
  });

  it('moves the active option with ArrowDown before activating it', async () => {
    const user = userEvent.setup();
    renderWithRouter();
    const input = screen.getByRole('combobox');
    await user.type(input, 'a');
    await waitFor(() => expect(screen.getByRole('listbox')).toBeInTheDocument());
    await user.keyboard('{ArrowDown}');
    const options = screen.getAllByRole('option');
    expect(options[0]).toHaveAttribute('aria-selected', 'true');
  });

  it('wraps to the last option when pressing ArrowUp with nothing active', async () => {
    const user = userEvent.setup();
    renderWithRouter();
    const input = screen.getByRole('combobox');
    await user.type(input, 'a');
    await waitFor(() => expect(screen.getByRole('listbox')).toBeInTheDocument());
    await user.keyboard('{ArrowUp}');
    const options = screen.getAllByRole('option');
    expect(options[options.length - 1]).toHaveAttribute('aria-selected', 'true');
  });

  it('moves the active option backward with ArrowUp once something is active', async () => {
    const user = userEvent.setup();
    renderWithRouter();
    const input = screen.getByRole('combobox');
    await user.type(input, 'a');
    await waitFor(() => expect(screen.getByRole('listbox')).toBeInTheDocument());
    await user.keyboard('{ArrowDown}{ArrowDown}{ArrowUp}');
    const options = screen.getAllByRole('option');
    expect(options[0]).toHaveAttribute('aria-selected', 'true');
  });

  it('ignores keyboard navigation when the results list is closed', async () => {
    const user = userEvent.setup();
    renderWithRouter();
    const input = screen.getByRole('combobox');
    input.focus();
    // No query typed yet, so the listbox is not open — this should be a no-op.
    await user.keyboard('{ArrowDown}');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('closes the results on Escape', async () => {
    const user = userEvent.setup();
    renderWithRouter();
    await user.type(screen.getByRole('combobox'), 'bath');
    await waitFor(() => expect(screen.getByRole('listbox')).toBeInTheDocument());
    await user.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
  });

  it('clears the query when the clear button is clicked', async () => {
    const user = userEvent.setup();
    renderWithRouter();
    const input = screen.getByRole('combobox');
    await user.type(input, 'bath');
    const clearButton = await screen.findByRole('button', { name: /clear search/i });
    await user.click(clearButton);
    expect(input).toHaveValue('');
  });

  it('closes the results when clicking outside the search bar', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <div>
          <SearchBar />
          <button type="button">Outside element</button>
        </div>
      </MemoryRouter>,
    );
    await user.type(screen.getByRole('combobox'), 'bath');
    await waitFor(() => expect(screen.getByRole('listbox')).toBeInTheDocument());
    await user.click(screen.getByRole('button', { name: /outside element/i }));
    await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
  });
});
