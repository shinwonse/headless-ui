import { useEffect, useRef, useState } from 'react';

import { cn } from '@/utils';

interface LineClampProps {
  className?: string;
  lines: number;
  text: string;
}

const LineClamp = ({ className, lines, text }: LineClampProps) => {
  const cloneRef = useRef<HTMLDivElement>(null);
  const elemRef = useRef<HTMLDivElement>(null);
  const [isClamped, toggleClamped] = useState(true);

  useEffect(() => {
    if (cloneRef.current && elemRef.current) {
      toggleClamped(
        Math.floor(
          cloneRef.current.offsetHeight /
            parseInt(getComputedStyle(cloneRef.current).lineHeight),
        ) > (lines || 0),
      );
    }
  }, [lines]);

  return (
    <div
      className={cn(
        'relative m-2.5 p-2.5 border border-gray-300 leading-relaxed',
        isClamped ? 'overflow-hidden text-ellipsis' : '',
        className,
      )}
    >
      <div
        className={cn(
          'absolute box-border left-2.5 top-2.5 whitespace-pre-line invisible opacity-0 z-[-1]',
        )}
        ref={cloneRef}
      >
        {text}
      </div>
      <div
        className={cn(
          'whitespace-pre-line',
          isClamped && `line-clamp-${lines}`,
        )}
        ref={elemRef}
      >
        {text}
      </div>
      {isClamped && <button onClick={() => toggleClamped(false)}>more</button>}
    </div>
  );
};

export default LineClamp;
