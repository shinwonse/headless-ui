import { ChangeEvent, useState } from 'react';

import { cn, measureLines } from '@/utils';

const DEFAULT_MAX_ROWS = 15;
const DEFAULT_MIN_ROWS = 3;

interface TextBoxProps {
  className?: string;
  maxRows?: number;
  minRows?: number;
}

const TextBox = ({
  className,
  maxRows = DEFAULT_MAX_ROWS,
  minRows = DEFAULT_MIN_ROWS,
}: TextBoxProps) => {
  const [text, setText] = useState<string>('');
  const [lines, setLines] = useState<number>(minRows);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textArea = e.target;
    const value = textArea.value;
    console.log(textArea);
    const measuredLines = measureLines(textArea, value);
    const validLines = Math.min(Math.max(measuredLines, minRows), maxRows);

    setText(value);
    setLines(validLines);
  };

  return (
    <textarea
      className={cn('border rounded box-border p-2', className)}
      onChange={handleChange}
      value={text}
      rows={lines}
    />
  );
};

export default TextBox;
