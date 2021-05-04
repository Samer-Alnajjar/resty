import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../Form.js';

describe('Testing the Form', () => {
  test('the button should be rendered', async () => {
    let handleResult = jest.fn();
    let form = render(<Form handleResult={handleResult} />);
    let button = form.getByText(/GO!/i);
    expect(button).toBeInTheDocument();
  });
});