import {
  cloneElement,
  createContext,
  HTMLAttributes,
  MouseEvent,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import { cn } from '@/utils';

const TooltipContext = createContext<any>(null);

export const useTooltip = () => useContext(TooltipContext);

interface TooltipProviderProps {
  children: ReactNode;
}

const TooltipProvider = ({ children }: TooltipProviderProps) => {
  const [tooltipData, setTooltipData] = useState({
    content: null,
    isVisible: false,
    position: { left: 0, top: 0 },
  });

  return (
    <TooltipContext.Provider value={{ setTooltipData, tooltipData }}>
      {children}
    </TooltipContext.Provider>
  );
};

interface TooltipRootProps {
  children: ReactNode;
  className?: string;
  defaultOpen?: boolean;
  open?: boolean;
}

const TooltipRoot = ({
  children,
  className,
  defaultOpen,
}: TooltipRootProps) => {
  const { setTooltipData, tooltipData } = useTooltip();

  if (defaultOpen && !tooltipData.isVisible) {
    setTooltipData({ ...tooltipData, isVisible: true });
  }

  return <div className={cn(className)}>{children}</div>;
};

interface TooltipTriggerProps {
  children: ReactElement;
}

const TooltipTrigger = ({ children }: TooltipTriggerProps) => {
  const { setTooltipData } = useContext(TooltipContext);

  const handleMouseEnter = (event: MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipData({
      isVisible: true,
      position: {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
      },
    });
  };

  const handleMouseLeave = () => {
    setTooltipData({
      content: null,
      isVisible: false,
      position: { left: 0, top: 0 },
    });
  };

  return cloneElement(children, {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  });
};

interface TooltipPortalProps {
  children: ReactNode;
}

const TooltipPortal = ({ children }: TooltipPortalProps) => {
  return createPortal(children, document.body);
};

interface TooltipContentProps extends HTMLAttributes<HTMLDivElement> {}

const TooltipContent = ({ children, ...props }: TooltipContentProps) => {
  const { tooltipData } = useContext(TooltipContext);

  if (!tooltipData.isVisible) return null;

  return (
    <div
      className={cn('bg-black py-1 px-2 text-white rounded absolute z-10')}
      {...props}
    >
      {children || tooltipData.content}
    </div>
  );
};

const Tooltip = {
  Content: TooltipContent,
  Portal: TooltipPortal,
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
};

export default Tooltip;
