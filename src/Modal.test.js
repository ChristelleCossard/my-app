import React from 'react';
import { render } from '@testing-library/react';
import Modal from 'Modal.jsx';

test('Renders title prop correctly', () => {
  const { getByText } = render(<Modal title="Titre de la modale" />);
  const titleElement = getByText(/Titre de la modale/i);
  expect(titleElement).toBeInTheDocument();
});