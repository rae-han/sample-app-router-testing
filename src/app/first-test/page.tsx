import Link from "next/link"
import Button from "../shared/ui/button";
import Paragraph from "../shared/ui/paragraph";
import TextField from "../shared/ui/text-field";
const FirstTestPage = () => {
  return (
    <div>
      <h1>First Test Page</h1>
      <Link href="/">Home</Link>
      <Button>Click me</Button>
      <Paragraph>Text</Paragraph>
      <TextField />
    </div>
  )
}

export default FirstTestPage;