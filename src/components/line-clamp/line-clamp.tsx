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
    <div className={cn('leading-4 line-clamp-2', className, isClamped && '')}>
      <div className={cn('hidden')} ref={cloneRef}>
        {text}
      </div>
      <div
        ref={elemRef}
        className={cn('whitespace-pre-line')}
        style={{ WebkitLineClamp: lines }}
      >
        {text}
      </div>
      {isClamped && (
        <button onClick={() => toggleClamped(false)}>Read more</button>
      )}
    </div>
  );
};

export default LineClamp;
