const measureLines = (element: HTMLElement, value: string) => {
  if (!element || !value) return 0;
  const canvas = document.createElement('canvas');
  const canvasContext: CanvasRenderingContext2D = canvas.getContext('2d')!;
  const style = window.getComputedStyle(element);
  canvasContext.font = `${style.getPropertyValue('font-size')} ${style.getPropertyValue('font-family')}`;

  const lines = value.split('\n').reduce((totalLines, line) => {
    const lineWidth = canvasContext.measureText(line).width;
    const linesInLine = Math.ceil(lineWidth / element.offsetWidth);
    return totalLines + linesInLine;
  }, 0);

  return lines;
};

export default measureLines;
