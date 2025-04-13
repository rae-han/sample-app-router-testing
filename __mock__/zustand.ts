const { create: createStore } = jest.requireActual('zustand');
import { act } from '@testing-library/react';

const storeResetFns = new Set();

const create = () => createStore();

export default create;
