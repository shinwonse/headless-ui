import { createContext, ReactNode, useContext, useState } from 'react';

import { cn } from '@/utils';

/**
 * Tabs.Root
 * Tabs.List
 * Tabs.Trigger
 * Tabs.Content
 */
export const TabMenuContext = createContext<any>(null);

interface TabMenuRootProps {
  children?: ReactNode;
  className?: string;
  defaultValue?: string;
}

const TabMenuRoot = ({
  children,
  className,
  defaultValue,
}: TabMenuRootProps) => {
  const [currentValue, setCurrentValue] = useState<string | undefined | null>(
    defaultValue,
  );

  const handleTabChange = (value: string) => {
    setCurrentValue(value);
  };

  return (
    <TabMenuContext.Provider value={{ currentValue, handleTabChange }}>
      <div className={cn('border rounded', className)}>{children}</div>
    </TabMenuContext.Provider>
  );
};

interface TabsListProps {
  children: ReactNode;
  className?: string;
}

const TabMenuList = ({ children, className }: TabsListProps) => {
  return (
    <ul className={cn('flex flex-row justify-between border-b', className)}>
      {children}
    </ul>
  );
};

interface TabMenuTriggerProps {
  className?: string;
  id: string;
  title: string;
}

const TabMenuTrigger = ({ className, id, title }: TabMenuTriggerProps) => {
  const { handleTabChange } = useContext(TabMenuContext);

  return (
    <li className={cn('w-full text-center border-r', className)}>
      <button onClick={() => handleTabChange(id)}>{title}</button>
    </li>
  );
};

interface TabMenuContentProps {
  children: ReactNode;
  className?: string;
  id: string;
}

const TabMenuContent = ({ children, className, id }: TabMenuContentProps) => {
  const { currentValue } = useContext(TabMenuContext);

  return (
    <div className={cn(currentValue === id ? 'block' : 'hidden', className)}>
      {children}
    </div>
  );
};

const TabMenu = {
  Content: TabMenuContent,
  List: TabMenuList,
  Root: TabMenuRoot,
  Trigger: TabMenuTrigger,
};

export default TabMenu;
