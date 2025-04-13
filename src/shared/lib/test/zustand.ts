import useTodoStore, { Todos } from '../store/todo';
import { StoreApi } from 'zustand';

const mockStore = <T>(hook: StoreApi<T>, store: Partial<T>) => {
  const initialStore = hook.getState();

  hook.setState({ ...initialStore, ...store }, true);
};

export const mockUseTodoStore = (store: Partial<Todos>) => {
  mockStore(useTodoStore, store);
};
