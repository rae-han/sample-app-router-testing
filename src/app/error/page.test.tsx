import render from '@/shared/lib/render';
import { screen } from '@testing-library/dom';

import ErrorPage from './page';

const navigationFn = jest.fn();

jest.mock('next/navigation', () => {
  const original = jest.requireActual<typeof import('next/navigation')>('next/navigation');

  return {
    original,
    useRouter: () => ({
      push: navigationFn,
      replace: navigationFn,
    }),
  };
});

describe('ErrorPage', () => {
  it('홈으로 가기를 누르면 "/" 경로로 push 함수가 호출 된다.', async () => {
    const { user } = await render(<ErrorPage />);

    await user.click(screen.getByText('Go to Home'));

    expect(navigationFn).toHaveBeenNthCalledWith(1, '/');
  });

  it('"뒤로가기" 버튼을 누르면 "/" 경로로 replace 함수가 호출 된다.', async () => {
    const { user } = await render(<ErrorPage />);

    await user.click(screen.getByText('Back'));

    expect(navigationFn).toHaveBeenCalledWith('/', { scroll: false });
  });
});
