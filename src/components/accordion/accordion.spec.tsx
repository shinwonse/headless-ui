import { render } from '@/utils';

import Accordion from './accordion';

describe('아코디언의 동작을 확인합니다.', () => {
  it('아코디언이 렌더링됩니다.', async () => {
    const accordion = await render(<Accordion />);
  });
});
