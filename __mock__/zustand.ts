const { create: actualCreate } = jest.requireActual('zustand');
import { act } from '@testing-library/react';

const storeResetFns = new Set<() => void>();

// const create = () => createStore();
const create = (createState: any) => {
  const store = actualCreate(createState);
  const initialState = store.getState();

  storeResetFns.add(() => store.setState(initialState, true));

  return store;
};

beforeEach(() => {
  act(() => storeResetFns.forEach((resetFn) => resetFn()));
});

export default create;
