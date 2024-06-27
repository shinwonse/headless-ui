import render from '@/utils/render';

import Accordion from './accordion';

const renderAccordion = async () => {
  return await render(
    <Accordion.Root>
      {contents.map(({ content, header }, index) => (
        <Accordion.Item key={index} index={index}>
          <Accordion.Header>
            <Accordion.Trigger index={index}>{header}</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content index={index}>{content}</Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>,
  );
};

describe('아코디언 컴포넌트의 동작을 확인합니다.', () => {
  it('아코디언 1을 클릭하면 아코디언 1 컨텐츠가 펼쳐집니다.', async () => {
    const { getByRole, getByText, user } = await renderAccordion();

    const accordionOneTrigger = getByRole('button', { name: '아코디언 1' });
    await user.click(accordionOneTrigger);

    expect(getByText('아코디언 1 컨텐츠')).not.toHaveClass('hidden');
    expect(getByText('아코디언 2 컨텐츠')).toHaveClass('hidden');
  });

  it('아코디언 1이 펼쳐진 상태에서 아코디언 2를 클릭하면 아코디언 2 컨텐츠가 펼쳐집니다.', async () => {
    const { getByRole, getByText, user } = await renderAccordion();

    const accordionOneTrigger = getByRole('button', { name: '아코디언 1' });
    const accordionTwoTrigger = getByRole('button', { name: '아코디언 2' });

    await user.click(accordionOneTrigger);
    expect(getByText('아코디언 1 컨텐츠')).not.toHaveClass('hidden');
    expect(getByText('아코디언 2 컨텐츠')).toHaveClass('hidden');

    await user.click(accordionTwoTrigger);

    expect(getByText('아코디언 1 컨텐츠')).toHaveClass('hidden');
    expect(getByText('아코디언 2 컨텐츠')).not.toHaveClass('hidden');
  });
});

const contents = [
  { content: '아코디언 1 컨텐츠', header: '아코디언 1' },
  { content: '아코디언 2 컨텐츠', header: '아코디언 2' },
  { content: '아코디언 3 컨텐츠', header: '아코디언 3' },
];
