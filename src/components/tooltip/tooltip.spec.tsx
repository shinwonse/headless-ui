import Tooltip from '@/components/tooltip/tooltip';
import render from '@/utils/render';

const renderTooltip = async () => {
  return await render(
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>
          <button>Tooltip Trigger</button>
        </Tooltip.Trigger>
        <Tooltip.Content>Tooltip Content</Tooltip.Content>
        <Tooltip.Portal>Tooltip Portal</Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>,
  );
};

describe('툴팁 컴포넌트의 동작을 확인합니다.', () => {
  it('툴팁 트리거를 마우스 오버하면 툴팁 컨텐츠가 렌더링됩니다.', async () => {
    const { getByText, queryByText, user } = await renderTooltip();

    expect(queryByText('Tooltip Content')).toBeNull();

    const trigger = getByText('Tooltip Trigger');
    await user.hover(trigger);

    expect(getByText('Tooltip Content')).toBeInTheDocument();
  });
});
