import render from '@/utils/render';

import TabMenu from './tab-menu';

const renderTabMenu = async () => {
  return await render(
    <TabMenu.Root defaultValue="1">
      <TabMenu.List>
        <TabMenu.Trigger id="1" title="탭 1" />
        <TabMenu.Trigger id="2" title="탭 2" />
        <TabMenu.Trigger id="3" title="탭 3" />
      </TabMenu.List>
      <div className="p-4">
        <TabMenu.Content id="1">탭 1 컨텐츠</TabMenu.Content>
        <TabMenu.Content id="2">탭 2 컨텐츠</TabMenu.Content>
        <TabMenu.Content id="3">탭 3 컨텐츠</TabMenu.Content>
      </div>
    </TabMenu.Root>,
  );
};

describe('탭 메뉴 컴포넌트의 동작을 확인합니다.', () => {
  it('기본으로 설정한 탭이 활성화 상태로 렌더링됩니다.', async () => {
    const { getByText } = await renderTabMenu();

    const tabOneContent = getByText('탭 1 컨텐츠');

    expect(tabOneContent).not.toHaveClass('hidden');
  });

  it('탭 2를 클릭하면 탭 2 컨텐츠가 활성화 상태로 렌더링됩니다.', async () => {
    const { getByRole, getByText, user } = await renderTabMenu();

    const tabTwoTrigger = getByRole('button', { name: '탭 2' });
    await user.click(tabTwoTrigger);

    expect(getByText('탭 1 컨텐츠')).toHaveClass('hidden');
    expect(getByText('탭 2 컨텐츠')).not.toHaveClass('hidden');
  });
});
