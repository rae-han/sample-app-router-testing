import { act } from '@testing-library/react';

const storeResetFns = new Set<() => void>();

const create = <T>(createState: any) => {
  let state: any;
  const getState = () => state;
  const setState = (partial: any, replace?: boolean) => {
    const nextState = typeof partial === 'function' ? partial(state) : partial;
    state = replace ? nextState : { ...state, ...nextState };
  };

  const store = {
    getState,
    setState,
  };

  state = createState(setState, getState, store);
  return store;
};

beforeEach(() => {
  act(() => {
    storeResetFns.forEach((resetFn) => resetFn());
  });
});

export { create };
