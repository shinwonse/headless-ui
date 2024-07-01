import type { Meta } from '@storybook/react';

import TextBox from './text-box';

export default {
  title: '텍스트박스',
} as Meta;

export const 기본 = () => {
  return <TextBox />;
};
