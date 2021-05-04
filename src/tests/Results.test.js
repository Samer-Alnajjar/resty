import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Result from '../Results.js';

describe('Testing the result', () => {
  test('should successfuly render the data', () => {
    const mockData = { test: 'hello' };
    console.log(`mockData`, mockData);
    render(<Result data={mockData.test} />);
  });
});