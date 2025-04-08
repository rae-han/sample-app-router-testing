
import { render } from '@testing-library/react';
import React from 'react';


export default async (component: React.ReactNode, options = {}) => {

  return {
    ...render(
      component
    ),
  };
};
