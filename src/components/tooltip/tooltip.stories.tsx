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
        <button>툴팁 트리거</button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content>툴팁 컨텐츠</Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
};
