import { createContext, ReactNode, useContext, useState } from 'react';

import { cn } from '@/utils';

/**
 * Accordion.Root: 아코디언 컴포넌트의 루트 요소입니다.
 * Accordion.Item: 아코디언 아이템 컴포넌트입니다.
 * Accordion.Header: 아코디언 헤더 컴포넌트입니다.
 * Accordion.Trigger: 아코디언 트리거 컴포넌트입니다.
 * Accordion.Content: 아코디언 컨텐츠 컴포넌트입니다.
 */
const AccordionContext = createContext<any>(null);

interface AccordionRootProps {
  children: ReactNode;
  className?: string;
}

const AccordionRoot = ({ children, className }: AccordionRootProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <AccordionContext.Provider
      value={{
        openIndex,
        toggleItem,
      }}
    >
      <ul className={cn('border rounded', className)}>{children}</ul>
    </AccordionContext.Provider>
  );
};

interface AccordionItemProps {
  children: ReactNode;
  className?: string;
  index: number;
}

const AccordionItem = ({ children, className, index }: AccordionItemProps) => {
  const { openIndex } = useContext(AccordionContext);
  const isOpen = openIndex === index;

  return <li className={cn('', className)}>{children}</li>;
};

interface AccordionHeaderProps {
  children: ReactNode;
  className?: string;
}

const AccordionHeader = ({ children, className }: AccordionHeaderProps) => {
  return <h3 className={cn(className)}>{children}</h3>;
};

interface AccordionTriggerProps {
  children: ReactNode;
  className?: string;
  index: number;
}

const AccordionTrigger = ({
  children,
  className,
  index,
}: AccordionTriggerProps) => {
  const { toggleItem } = useContext(AccordionContext);

  return (
    <button className={cn(className)} onClick={() => toggleItem(index)}>
      {children}
    </button>
  );
};

interface AccordionContentProps {
  children: ReactNode;
  className?: string;
  index: number;
}

const Accordioncontent = ({
  children,
  className,
  index,
}: AccordionContentProps) => {
  const { openIndex } = useContext(AccordionContext);

  return (
    <div className={cn(openIndex === index ? '' : 'hidden', className)}>
      {children}
    </div>
  );
};

const Accordion = {
  Content: Accordioncontent,
  Header: AccordionHeader,
  Item: AccordionItem,
  Root: AccordionRoot,
  Trigger: AccordionTrigger,
};

export default Accordion;
