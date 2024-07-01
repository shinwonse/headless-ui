import render from '@/utils/render';

import TextBox from './text-box';

describe('텍스트박스 컴포넌트의 동작을 확인합니다.', () => {
  it('디폴트로 설정한 minRows를 rows attribute의 값을 갖습니다.', async () => {
    const { getByRole } = await render(<TextBox />);
    const textArea = getByRole('textbox');
    expect(textArea).toHaveAttribute('rows', '3');
  });
});
