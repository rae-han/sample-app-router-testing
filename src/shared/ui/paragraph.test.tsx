import render from '@/shared/lib/render';
import Paragraph from './paragraph';

describe('Paragraph', () => {
  it('renders a paragraph', async () => {
    const { getByText } = await render(<Paragraph>Text</Paragraph>);

    expect(getByText('Text')).toBeInTheDocument();
  });
});
