import render from '@/shared/lib/render';
import TextField from './text-field';
import { screen } from '@testing-library/react';

describe('TextField', () => {
  it('텍스트를 입력하면, onChange prop으로 등록된 함수가 호출된다.', async () => {
    const spy = jest.fn();
    const { user } = await render(<TextField onChange={spy} />);

    const inputText = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

    await user.type(inputText, 'test');

    expect(spy).toHaveBeenCalledWith('test');
  });

  it('Enter 키를 누르면, onEnter prop으로 등록된 함수가 호출된다.', async () => {
    const spy = jest.fn();
    const { user } = await render(<TextField onEnter={spy} />);

    const inputText = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

    await user.type(inputText, 'test');
    await user.keyboard('{Enter}');

    expect(spy).toHaveBeenCalledWith('test');
  });
});
