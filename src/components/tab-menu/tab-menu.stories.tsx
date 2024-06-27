import type { Meta } from '@storybook/react';

import { cn } from '@/utils';

import TabMenu from './tab-menu';

export default {
  title: '탭 메뉴',
} as Meta;

export const 기본 = () => {
  return (
    <TabMenu.Root defaultValue="1">
      <TabMenu.List>
        <TabMenu.Trigger id="1" title="탭 1" />
        <TabMenu.Trigger id="2" title="탭 2" />
        <TabMenu.Trigger id="3" title="탭 3" />
      </TabMenu.List>
      <div className={cn('p-4')}>
        <TabMenu.Content id="1">탭 1 컨텐츠</TabMenu.Content>
        <TabMenu.Content id="2">탭 2 컨텐츠</TabMenu.Content>
        <TabMenu.Content id="3">탭 3 컨텐츠</TabMenu.Content>
      </div>
    </TabMenu.Root>
  );
};
