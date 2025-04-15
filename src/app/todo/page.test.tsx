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
});
