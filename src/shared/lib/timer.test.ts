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
});
