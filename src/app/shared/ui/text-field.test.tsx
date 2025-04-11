import render from "@/shared/lib/render";
import TextField from "./text-field";

it('텍스트를 입력하면, onChange prop으로 등록된 함수가 호출된다.', async () => {
  await render(<TextField />);
});