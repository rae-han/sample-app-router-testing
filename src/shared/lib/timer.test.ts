import { debounce } from './timer';

describe('debounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('특정 시간이 지난 후 함수가 호출된다.', () => {
    const spy = jest.fn();

    const debounceFn = debounce(spy, 400);

    debounceFn();

    jest.advanceTimersByTime(400);

    expect(spy).toHaveBeenCalled();
  });

  it('연이어 호출 시 특정 시간이 지난 함수만 호출된다.', () => {
    const spy = jest.fn();

    const debounceFn = debounce(spy, 400);

    debounceFn();

    jest.advanceTimersByTime(200);
    debounceFn();

    jest.advanceTimersByTime(400);
    debounceFn();

    jest.advanceTimersByTime(100);
    debounceFn();

    jest.advanceTimersByTime(200);
    debounceFn();

    jest.advanceTimersByTime(300);
    debounceFn();

    jest.advanceTimersByTime(400);

    expect(spy).toHaveBeenCalledTimes(2);
  });
});
