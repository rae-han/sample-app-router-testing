import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import FirstTestPage from './page'


beforeEach(() => {
  console.log('file / beforeEach / 0 - 2'); // 3
});
beforeAll(() => {
  console.log('file / beforeAll 0 - 1'); // 1
});
afterEach(() => {
  console.log('file / afterEach / 0 - 3'); // 6
});
afterAll(() => {
  console.log('file / afterAll / 0 - 4'); // 8
});
/**
 * All은 전체 테스트 파일에서 실행되는 테스트 그룹을 나타낸다.
 * 1번씩 실행된다.
 * 
 * Each 는 각 describe 내에서 실행되는 테스트 그룹을 나타낸다.
 * 각 describe 내에서 실행된다.
 */

describe('Page', () => {
  console.log('test / 1 - 0')

  beforeEach(() => {
    console.log('group / beforeEach'); // 4
  });
  beforeAll(() => {
    console.log('group / beforeAll'); // 2
  });
  afterEach(() => {
    console.log('group / afterEach'); // 5
  });
  afterAll(() => {
    console.log('group / afterAll'); // 7
  });

  it('renders a heading', () => {
    console.log('test / 1 - 1');
    render(<FirstTestPage />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })
})

describe('Paragraph', () => {
  console.log('test / 2 - 0');

  it('renders a paragraph', () => {
    console.log('test / 2 - 1');

    render(<FirstTestPage />)

    const paragraph = screen.getByText('Text')

    expect(paragraph).toBeInTheDocument()
  })
})  
