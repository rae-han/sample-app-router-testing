// __mocks__/zustand.ts
import { act } from '@testing-library/react';
import type * as ZustandTypes from 'zustand';

// 실제 zustand 모듈을 가져옴 (ESM/CJS 호환)
const zustandModule = jest.requireActual<typeof ZustandTypes>('zustand');
const actualCreate =
  typeof zustandModule.create === 'function' ? zustandModule.create : zustandModule.default.create;

// 앱에 선언된 모든 스토어에 대해 재설정 함수를 저장
const storeResetFns = new Set<() => void>();

// 스토어를 생성할 때 초기 상태를 가져와 리셋 함수를 생성하고 set에 추가
export const create = <T>(createState: ZustandTypes.StateCreator<T>) => {
  const store = actualCreate<T>(createState);
  const initialState = store.getState();
  storeResetFns.add(() => store.setState(initialState, true));
  return store;
};

// 각 테스트 실행 전 모든 스토어를 리셋
beforeEach(() => {
  act(() => {
    storeResetFns.forEach((resetFn) => resetFn());
  });
});

// 필요하다면 zustand의 다른 내보내기도 함께 export
export * from 'zustand';
