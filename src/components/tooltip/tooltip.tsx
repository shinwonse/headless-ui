/**
 * Tooltip.Provider
 * Tooltip.Root
 * Tooltip.Trigger
 * Tooltip.Portal
 * Tooltip.Content
 * Tooltip.Arrow
 */

interface TooltipProviderProps {}

const TooltipProvider = () => {};

interface TooltipRootProps {}

const TooltipRoot = () => {};

interface TooltipTriggerProps {}

const TooltipTrigger = () => {};

interface TooltipPortalProps {}

const TooltipPortal = () => {};

interface TooltipContentProps {}

const TooltipContent = () => {};

interface TooltipArrowProps {}

const TooltipArrow = () => {};

const Tooltip = {
  Arrow: TooltipArrow,
  Content: TooltipContent,
  Portal: TooltipPortal,
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
};

export default Tooltip;
