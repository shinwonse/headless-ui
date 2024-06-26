import { render, type RenderResult } from '@testing-library/react';
import { type UserEvent, userEvent } from '@testing-library/user-event';
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
