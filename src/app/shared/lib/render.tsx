import { render } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

export default async (component: React.ReactNode, options = {}) => {
  const user = userEvent.setup();

  return {
    user,
    ...render(component),
  };
};
