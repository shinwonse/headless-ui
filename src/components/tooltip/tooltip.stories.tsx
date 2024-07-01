import type { Meta } from '@storybook/react';

import Tooltip from './tooltip';

export default {
  decorators: [
    (Story) => (
      <Tooltip.Provider>
        <Story />
      </Tooltip.Provider>
    ),
  ],
  title: '툴팁',
} as Meta;

export const 기본 = () => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger>
        <button>마우스를 올려보세요</button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content>툴팁이 나타났어요</Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
};
