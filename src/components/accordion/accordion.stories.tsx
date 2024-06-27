import { ChevronDownIcon } from '@radix-ui/react-icons';
import type { Meta } from '@storybook/react';
import { useContext } from 'react';

import { cn } from '@/utils';

import Accordion, { AccordionContext } from './accordion';

export default {
  decorators: [
    (Story) => (
      <Accordion.Root className={cn('')}>
        <Story />
      </Accordion.Root>
    ),
  ],
  title: '아코디언',
} as Meta;

export const 기본 = () => {
  const { openIndex } = useContext(AccordionContext);

  return (
    <>
      {contents.map(({ content, header }, index) => (
        <Accordion.Item key={index} index={index}>
          <Accordion.Header className={cn('flex flex-row items-center')}>
            <Accordion.Trigger index={index}>{header}</Accordion.Trigger>
            <ChevronDownIcon
              aria-hidden
              className={cn(
                'transition-transform duration-300',
                openIndex === index && 'rotate-180',
              )}
            />
          </Accordion.Header>
          <Accordion.Content className={cn('')} index={index}>
            {content}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </>
  );
};

const contents = [
  { content: '아코디언 1 컨텐츠', header: '아코디언 1' },
  { content: '아코디언 2 컨텐츠', header: '아코디언 2' },
  { content: '아코디언 3 컨텐츠', header: '아코디언 3' },
];
