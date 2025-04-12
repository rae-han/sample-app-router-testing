import render from '@/shared/lib/render';
import EmptyPage from './page';
import { screen } from '@testing-library/react';

const navigationFn = jest.fn();

jest.mock('next/navigation', () => {
  const original = jest.requireActual<typeof import('next/navigation')>('next/navigation');

  return {
    original,
    useRouter: () => ({
      push: navigationFn,
    }),
  };
});

describe('EmptyPage', () => {
  it('"홈으로 가기" 링크를 클릭할경우 "/"경로로 navigate함수가 호출된다', async () => {
    const { user } = await render(<EmptyPage />);

    await user.click(screen.getByText('Go to Home'));

    expect(navigationFn).toHaveBeenNthCalledWith(1, '/');
  });
});
