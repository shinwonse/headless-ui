import { render, RenderResult } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { ReactElement } from 'react';

interface TestRenderResult extends RenderResult {
  user: UserEvent;
}

export default async function renderComponent(
  component: ReactElement,
): Promise<TestRenderResult> {
  const user = userEvent.setup();

  return {
    user,
    ...render(component),
  };
}
