import { Meta } from '@storybook/react';

import { cn } from '@/utils';

import LineClamp from './line-clamp';

export default {
  title: '라인 클램프',
} as Meta;

export const 기본 = () => (
  <LineClamp
    className={cn('w-80')}
    lines={3}
    text="라인 클램프 라인 클램프 라인 클램프 라인 클램프 라인 클램프 라인 클램프 라인 클램프 라인 클램프 라인 클램프 라인 클램프 라인 클램프 라인 클램프 라인 클램프 라인 클램프 라인 클램프 라인 클램프"
  />
);
