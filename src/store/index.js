import React from 'react';
import { BetsProvider } from './BetsContext';
import { BasketProvider } from './BasketContext';

function combineComponents(...components) {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => function ({ children }) {
      return (
        <AccumulatedComponents>
          <CurrentComponent>{children}</CurrentComponent>
        </AccumulatedComponents>
      );
    },
    ({ children }) => children,
  );
}

const providers = [
  BetsProvider,
  BasketProvider,
];

const AppContextProvider = combineComponents(...providers);

export default AppContextProvider;
