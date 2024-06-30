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

import { cn } from '@/utils';

const TooltipContext = createContext<any>(null);

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
  open,
}: TooltipRootProps) => {
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
  return <>{children}</>;
};

interface TooltipContentProps extends HTMLAttributes<HTMLDivElement> {}

const TooltipContent = ({ children, ...props }: TooltipContentProps) => {
  const { tooltipData } = useContext(TooltipContext);

  if (!tooltipData.isVisible) return null;

  return (
    <div
      style={{
        backgroundColor: 'black',
        borderRadius: '4px',
        color: 'white',
        left: tooltipData.position.left,
        padding: '5px 10px',
        position: 'absolute',
        top: tooltipData.position.top + 20,
        zIndex: 1000,
      }}
      {...props}
    >
      {children || tooltipData.content}
    </div>
  );
};

interface TooltipArrowProps {
  className?: string;
}

const TooltipArrow = ({ className }: TooltipArrowProps) => {
  return null;
};

const Tooltip = {
  Arrow: TooltipArrow,
  Content: TooltipContent,
  Portal: TooltipPortal,
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
};

export default Tooltip;
