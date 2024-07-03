import { cn } from '@/utils';
import render from '@/utils/render';

import LineClamp from './line-clamp';

const sampleText =
  '라인 클램프 라인 클램프 라인 클램프 라인 클램프 라인 클램프 라인 클램프 라인 클램프 라인 클램프 라인 클램프 라인 클램프 라인 클램프 라인 클램프 라인 클램프 라인 클램프 라인 클램프 라인 클램프';

describe('라인클램프 컴포넌트의 동작을 확인합니다.', () => {
  it('텍스트가 전달된 라인 수보다 길 경우 클램프 상태가 됩니다.', async () => {
    const { getByRole } = await render(
      <LineClamp className={cn('w-80')} lines={2} text={sampleText} />,
    );

    expect(getByRole('button')).toBeInTheDocument();
  });

  it('클램핑된 컴포넌트를 클릭하면 클램핑이 해제되어야 합니다.', async () => {
    const { getByText } = await render(
      <LineClamp className={cn('w-80')} lines={2} text={sampleText} />,
    );

    expect(getByText('more')).toBeInTheDocument();

    getByText('more').click();

    expect(getByText('Hello, World!')).toBeInTheDocument();
  });
});
