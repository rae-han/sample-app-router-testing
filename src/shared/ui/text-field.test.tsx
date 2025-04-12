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

  it('엔터키를 입력하면 onEnter prop으로 등록된 함수가 호출된다.', async () => {
    const spy = jest.fn();
    const { user } = await render(<TextField onEnter={spy} />);

    const textField = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

    await user.type(textField, 'test{Enter}');

    expect(spy).toHaveBeenCalledWith('test');
  });

  it('포커스가 활성화되면 onFocus prop으로 등록한 함수가 호출된다.', async () => {
    const spy = jest.fn();
    const { user } = await render(<TextField onFocus={spy} />);

    const textField = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

    await user.click(textField);

    expect(spy).toHaveBeenCalled();
  });

  it('포커스가 활성화되면 border 스타일이 추가된다.', async () => {
    const spy = jest.fn();
    const { user } = await render(<TextField onFocus={spy} />);

    const textField = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

    await user.click(textField);

    expect(textField).toHaveStyle('border-width: 2px');
    // expect(textField).toHaveStyle({
    //   'border-width': '2px',
    //   'border-style': 'solid',
    // });
  });
});
