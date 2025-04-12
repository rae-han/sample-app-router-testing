import { act, renderHook } from '@testing-library/react';
import useToggle from './useToggle';

describe('useToggle', () => {
  it('호출 시 initialValue 인자를 지정하지 않는 경우 isModalOpened 상태가 false로 설정된다.', () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current.isModalOpened).toBe(false);
  });

  it('호출 시 initialValue 인자를 boolean 값으로 지정하는 경우 해당 값으로 isModalOpened 상태가 설정된다.', () => {
    const { result } = renderHook(() => useToggle(true));

    expect(result.current.isModalOpened).toBe(true);
  });

  it('훅의 toggleIsModalOpened()를 호출하면 isModalOpened 상태가 toggle된다.', () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current.toggleIsModalOpened();
    });

    expect(result.current.isModalOpened).toBe(true);
  });
});
