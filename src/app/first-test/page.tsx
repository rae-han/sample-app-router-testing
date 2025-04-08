import Link from "next/link"
import Button from "../shared/ui/button";

const FirstTestPage = () => {
  return (
    <div>
      <h1>First Test Page</h1>
      <Link href="/">Home</Link>
      <Button>Click me</Button>
    </div>
  )
}

export default FirstTestPage;