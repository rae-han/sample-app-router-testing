import render from '@/shared/lib/render';
import TextField from './text-field';
import { screen } from '@testing-library/react';

describe('TextField', () => {
  it('텍스트를 입력하면, onChange prop으로 등록된 함수가 호출된다.', async () => {
    const { user } = await render(<TextField />);

    const input = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

    await user.type(input, 'test');

    expect(input).toHaveValue('test');
  });
});
