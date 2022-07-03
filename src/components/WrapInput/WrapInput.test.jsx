import React from 'react';
import { render } from '@testing-library/react';

import WrapInput from './WrapInput';

describe('Button', () => {
  test('renders the Button component', () => {
    render(<WrapInput />);
  });
});
