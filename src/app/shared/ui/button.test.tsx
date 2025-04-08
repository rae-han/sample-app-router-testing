import render from "@/shared/lib/render";
import Button from "./button";

describe('Button', () => {
  it('renders a button', async () => {
    const { getByText } = await render(<Button>Click me</Button>)

    expect(getByText('Click me')).toBeInTheDocument()
  })
})