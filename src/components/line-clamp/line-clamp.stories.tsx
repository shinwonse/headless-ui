import { Meta } from '@storybook/react';

import { cn } from '@/utils';

import LineClamp from './line-clamp';

export default {
  title: '라인 클램프',
} as Meta;

export const 기본 = () => (
  <LineClamp
    className={cn('w-80')}
    lines={2}
    text="라인 클램프는 텍스트의 높이를 제한하는 기능입니다. 라인 클램프는 텍스트의 높이를 제한하는 기능입니다."
  />
);
