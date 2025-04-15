import render from '@/shared/lib/render';
import { mockUseTodoStore } from '@/shared/lib/test/zustand';
import TodoPage from './page';
import { screen, within } from '@testing-library/react';

beforeEach(() => {
  mockUseTodoStore({
    todos: [
      { id: 1, title: 'test', completed: false },
      { id: 2, title: 'test2', completed: true },
    ],
  });

  // alert를 mock으로 설정
  jest.spyOn(window, 'alert').mockImplementation(() => {});
});

afterEach(() => {
  // 테스트 후 mock 초기화
  jest.restoreAllMocks();
});

describe('Todo Page', () => {
  it('TODO 리스트에 포함된 아이템들의 이름, 완료 여부가 올바르게 표시되어야 한다.', () => {
    render(<TodoPage />);

    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(2);

    const [firstTodoItem, secondTodoItem] = todoItems;

    // 첫 번째 Todo 항목 검증
    expect(within(firstTodoItem).getByText('test')).toBeInTheDocument();
    expect(within(firstTodoItem).getByRole('checkbox')).not.toBeChecked();

    // 두 번째 Todo 항목 검증
    expect(within(secondTodoItem).getByText('test2')).toBeInTheDocument();
    expect(within(secondTodoItem).getByRole('checkbox')).toBeChecked();
  });

  it('TODO 리스트에 아이템을 추가할 수 있어야 한다.', async () => {
    const SAMPLE_TEXT = 'test3';

    const { user } = await render(<TodoPage />);

    const input = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: 'Add' });

    await user.type(input, SAMPLE_TEXT);
    await user.click(addButton);

    expect(screen.getByText(SAMPLE_TEXT)).toBeInTheDocument();
  });

  it('TODO 리스트에 아이템을 추가할 때 빈 문자열을 입력하면 경고 메시지가 표시되어야 한다.', async () => {
    const { user } = await render(<TodoPage />);

    const addButton = screen.getByRole('button', { name: 'Add' });

    // 아무 텍스트도 입력하지 않고 바로 Add 버튼 클릭
    await user.click(addButton);

    expect(window.alert).toHaveBeenCalledWith('Please enter a todo');
  });
});
