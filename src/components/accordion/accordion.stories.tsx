import type { Meta } from '@storybook/react';

import { cn } from '@/utils';

import Accordion from './accordion';

export default {
  title: '아코디언',
} as Meta;

export const 기본 = () => (
  <Accordion.Root className={cn('p-4')}>
    <Accordion.Item index={0}>
      <Accordion.Header>
        <Accordion.Trigger index={0}>아코디언 1</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content index={0}>아코디언 1 컨텐츠</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item index={1}>
      <Accordion.Header>
        <Accordion.Trigger index={1}>아코디언 2</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content index={1}>아코디언 2 컨텐츠</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item index={2}>
      <Accordion.Header>
        <Accordion.Trigger index={2}>아코디언 3</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content index={2}>아코디언 3 컨텐츠</Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);
